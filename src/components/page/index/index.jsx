import React, {Component} from 'react'
import './index.scss'
import Index from './indexUI'

export default class One extends Component{
    constructor(){
        super();
        this.state={

            list:[1,2,3]
        }
    }
  
    render(){
        let {list}=this.state;
   
        return (
            <Index  data={list} />
        )
    }
       
}

