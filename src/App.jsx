import React, {Component} from 'react'
import {BrowserRouter as Router, Route, NavLink as Link, Redirect, Switch} from 'react-router-dom'
//头部
import header from './common/header.jsx'




import Index from './components/page/index/index'
import Mine from './components/page/mine/mine'
import Join from './components/page/join/join'
import NotFind from './components/page/NotFind'


import './App.css'

export default class App extends Component{

    render(){
        return (
            <Router>
            <div className="app">
            
                
                {/* Switch标签的功能：内部的Route只能第一个匹配上的作用 */}
                <Switch>
                    <Route path="/" exact render={()=>{
                        //重定向
                        return <Redirect to="/index">
                            <header></header>
                        </Redirect>
                    }}/>

                    <Route path="/index" component={Index}/>
                    
                    <Route path="/mine"  component={Mine}/>

                    <Route path="/join"  component={Join}/>

                    <Route path="/404"  component={NotFind}/>

                    <Route render={()=>{
                        //重定向
                        return <Redirect to="/404"/>
                    }}/>
                </Switch>

                {/* <Route path="/one/detail/:id" component={Detail}/> */}



                <nav className="tabs">
                    <Link className="tab" to="/index">首页</Link>
                    <Link className="tab" to="/mine">个人</Link>
                    <Link className="tab" to="/join">业主</Link>
                </nav>

            </div>
            </Router>
        )

    }
}

