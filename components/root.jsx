import React from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
export default class Root extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path="/" component={<Test/>}/>
                </div>
            </Router>
        )
    }
}

class Index extends React.Component{
    render(){
        return(
            <div>sdsd<div>
        )
    }
}

const Test = ()=> <div>test</div>
