import React from 'react'
import logo from '../images/logo2.png'

export default function(props){
    return(
        <div id="index" className="page">
            <div  className="title">
                <h1>
                    <img src={logo} alt=""/>
                </h1>
                <div className="dkcity">
                    <button type="button">深圳</button>
                </div>
            </div>
           
        </div>
    )
}