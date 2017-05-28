import React from 'react';
import Index from './index.jsx';
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
