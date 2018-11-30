
import React, { Component } from 'react'
import HeaderUi from '../../../common/HeaderUi.jsx'
import AppsearchUI from '../../../common/AppsearchUI.jsx'
import './index.scss'
export default class indexUI extends Component{
    render(){
            return(
                
                <div id="index"  className="page"> 
                    <HeaderUi />
                    <AppsearchUI />    
                                      
                </div>
            )
        }
    }

