import React from 'react';
export default class Left extends React.Component{
    _onTitle(){
        this.props.onDatas('title',this.refs.title.value);
    }

    _onUsername(){
        this.props.onDatas('username',this.refs.username.value);
    }
    _onSex(){
        this.props.onDatas('sex',this.refs.sex.value);
    }
    _onEdu(){
        this.props.onDatas('edu',this.refs.edu.value);
    }
    _onPhone(){
        this.props.onDatas('phone',this.refs.phone.value);
    }
    _onEmail(){
        this.props.onDatas('email',this.refs.email.value);
    }
    _onAge(){
        this.props.onDatas('age',this.refs.age.value);
    }
    _onSchool(){
        this.props.onDatas('school',this.refs.school.value);
    }
    _onMoney(){
        this.props.onDatas('money',this.refs.money.value);
    }
    _onSelfRat(){
        this.props.onDatas('selfRat',this.refs.selfRat.value);
    }
    _onSkill(){
        this.props.onDatas('skill',this.refs.skill.value);
    }

    _addEdu(){
        let edu= this.props.datas.edus || [];
        edu.push({
            startTime:this.refs.startTime.value,
            endTime:this.refs.endTime.value,
            eduType:this.refs.eduType.value,
            eduDis:this.refs.eduDis.value
        });
        this.props.onDatas('edus',edu);

    }
    _addWork(){
        let edu= this.props.datas.works || [];
        edu.push({
            startTime:this.refs.workStartTime.value,
            endTime:this.refs.workEndTime.value,
            position:this.refs.position.value,
            money:this.refs.workMoney.value,
            workDis:this.refs.workDis.value
        });
        this.props.onDatas('works',edu);

    }
    render(){
        return(
            <div style={{width:'400px'}} className="ui right sidebar vertical inverted slide out visible">
                <div className="ui container fluid">
                    <form className="ui form">
                        <div className="field">
                            <h3 className="ui block header">基本信息</h3>
                            <input onChange={this._onTitle.bind(this)} ref="title" type="text" name="title" placeholder="简历标题"/>
                            <input onChange={this._onUsername.bind(this)} ref="username" type="text" name="username" placeholder="姓名"/>
                            <input onChange={this._onSex.bind(this)} ref="sex" type="text" name="username" placeholder="性别"/>
                            <input onChange={this._onEdu.bind(this)} ref="edu" type="text" name="username" placeholder="学历"/>
                            <input onChange={this._onPhone.bind(this)} ref="phone" type="text" name="username" placeholder="电话"/>
                            <input onChange={this._onEmail.bind(this)} ref="email" type="text" name="username" placeholder="邮箱"/>
                            <input onChange={this._onAge.bind(this)} ref="age" type="text" name="username" placeholder="年龄"/>
                            <input onChange={this._onSchool.bind(this)} ref="school" type="text" name="username" placeholder="毕业院校"/>
                            <input onChange={this._onMoney.bind(this)} ref="money" type="text" name="username" placeholder="薪资要求"/>
                            <h3 className="ui block header">自我评价</h3>
                            <textarea onChange={this._onSelfRat.bind(this)} ref="selfRat" placeholder="自我评价"></textarea>
                            <h3 className="ui block header">技能证书</h3>
                            <input onChange={this._onSkill.bind(this)} ref="skill" type="text" name="skill" placeholder="技能证书"/>
                            <h3 className="ui block header">教育经历</h3>
                            <input ref="startTime" type="text" name="startTime" placeholder="开始时间"/>
                            <input ref="endTime" type="text" name="startTime" placeholder="结束时间"/>
                            <input ref="eduType" type="text" name="startTime" placeholder="类型"/>
                            <textarea ref="eduDis" placeholder="学业描述"></textarea>
                            <button type="button" className="ui button compact icon" onClick={this._addEdu.bind(this)}><i className="align plus icon"></i></button>
                            <h3 className="ui block header">工作经历</h3>
                            <input ref="workStartTime" type="text" name="startTime" placeholder="开始时间"/>
                            <input ref="workEndTime" type="text" name="startTime" placeholder="结束时间"/>
                            <input ref="position" type="text" name="startTime" placeholder="职位"/>
                            <input ref="workMoney" type="text" name="startTime" placeholder="薪资"/>
                            <textarea ref="workDis" placeholder="工作描述"></textarea>
                            <button type="button" className="ui button compact icon" onClick={this._addWork.bind(this)}><i className="align plus icon"></i></button>
                        </div>
                        <button className="ui button" type="submit">完成</button>
                    </form>
                </div>
            </div>
        )
    }
}
