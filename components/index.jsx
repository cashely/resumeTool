import React from 'react';
import Left from './left.jsx';
import Right from './right.jsx';
export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            datas:{
                title:'简历标题'
            }
        }
    }
    //改变数据的公共方法 key=>字段名称
    _onDatas(key,string){
        let oldDatas = this.state.datas;
        oldDatas[key] = string;
        this.setState({
            datas:oldDatas
        })
    }
    render(){
        return(
            <div>
                <Left datas={this.state.datas} onDatas={this._onDatas.bind(this)}/>
                <Right datas={this.state.datas}/>
            </div>
        )
    }
}
