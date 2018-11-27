import React, {Component} from 'react'

export default function(props){
    return(
        <div id="index"  className="page">
            <div >
            <h1>{props}</h1>
            </div>
            <div>
                <input/>
                <p>查询</p>
            </div>
        </div>
    )
}