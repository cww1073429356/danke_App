import React , {Component} from 'react'
import './AppsearchUI.scss'
import sea from '../images/sea.png'


export default class AppsearchUI extends Component{
    render(){
        return (
            <div className='seach'>
                <img src={sea} alt='sea' className='sea' />
                <input type='text' placeholder="输入您想住的区域，商圈或小区名称"/>    
            </div>
        )
    }
}