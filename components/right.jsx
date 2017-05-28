import React from 'react';
export default class Right extends React.Component{
    render(){
        return(
            <div style={{paddingRight:'400px'}} className="ui container fluid">
                <h1 className="ui header center aligned">{this.props.datas.title}</h1>
                <h3 className="ui header">个人信息</h3>
                <div className="ui clearing divider"></div>
                <div>
                    <p>姓名: {this.props.datas.username}</p>
                    <p>性别: {this.props.datas.sex}</p>
                    <p>学历: {this.props.datas.edu}</p>
                    <p>电话: {this.props.datas.phone}</p>
                    <p>邮箱: {this.props.datas.email}</p>
                    <p>年龄: {this.props.datas.age}</p>
                    <p>毕业院校: {this.props.datas.school}</p>
                    <p>薪资要求: {this.props.datas.money}</p>
                </div>
                <h3 className="ui header">自我评价</h3>
                <div className="ui clearing divider"></div>
                <p>{this.props.datas.selfRat}</p>
                <h3 className="ui header">技能标签</h3>
                <div className="ui clearing divider"></div>
                <div>
                    {
                        !this.props.datas.skill ? null : this.props.datas.skill.split(',').map((ele)=>{
                            return !ele.length ? null : <span key={Math.random()} className="ui label"> {ele} </span>
                        })
                    }
                </div>
                <h3 className="ui header">教育经历</h3>
                <div className="ui clearing divider"></div>
                {
                    (!this.props.datas.edus || !this.props.datas.edus.length) ? null : this.props.datas.edus.map((item)=>{
                        return <div key={Math.random()}>
                                    <p>{item.startTime}-{item.endTime} | {item.eduType}</p>
                                    <p>{item.eduDis}</p>
                               </div>
                    })
                }
                <h3 className="ui header">工作经历</h3>
                <div className="ui clearing divider"></div>
                {
                    (!this.props.datas.works || !this.props.datas.works.length) ? null : this.props.datas.works.map((item)=>{
                        return <div key={Math.random()}>
                                    <p>{item.startTime}-{item.endTime} | {item.position} | {item.money}</p>
                                    <p>{item.workDis}</p>
                               </div>
                    })
                }
            </div>
        )
    }
}
