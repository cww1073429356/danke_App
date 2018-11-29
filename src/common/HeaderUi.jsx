import React,{Component} from 'react'
// import {NavLink as Link} from 'react-router-dom'
import './header.scss'
import logo from '../images/logo.png'
import dw from '../images/dw.png'
import jt from '../images/jt.png'
export default class HeaderUi extends Component{
    render(){
        return (
            <header className='header'>
                <img src={logo} alt="img" className='img' />
                <div className='app-search'>
                    <img src={dw} alt=""/>
                        <button className='app-but'>
                            深圳
                        </button>
                    <img src={jt} alt=""/>
                </div>
            </header>
        )
    }
}