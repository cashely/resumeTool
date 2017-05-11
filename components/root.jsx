import React from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
export default class Root extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path="/" component={Index}/>
                </div>
            </Router>
        )
    }
}

class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            datas:{
                title:'简历标题'
            }
        }
    }

    //改变简历标题的方法
    _onTitle(string){
        let oldDatas = this.state.datas;
        oldDatas.title = string;
        this.setState({
            datas:oldDatas
        })
    }
    render(){
        return(
            <div>
                <Left onTitle={this._onTitle.bind(this)}/>
                <Right datas={this.state.datas}/>
            </div>
        )
    }
}
class Left extends React.Component{
    _onTitle(){
        this.props.onTitle(this.refs.title.value);
    }
    render(){
        return(
            <div className="ui right sidebar vertical inverted menu slide out visible">
                <div className="ui container fluid">
                    <form className="ui form">
                        <div className="field">
                        <label>简历标题</label>
                            <input onChange={this._onTitle.bind(this)} ref="title" type="text" name="first-name" placeholder="First Name"/>
                        </div>
                        <button className="ui button" type="submit">完成</button>
                    </form>
                </div>
            </div>
        )
    }
}
class Right extends React.Component{
    render(){
        return(
            <div style={{marginRight:'260px'}} className="ui container fluid">
                <div>{this.props.datas.title}</div>
            </div>
        )
    }
}
