import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <div className='header'>
            <div className='headerTitle'><div className='virticalText'>The</div><span className='titleHead'>Serin</span></div>
            <ul className='headLinkFlex' type="none">
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}}to="/home" className="headLinkText">Home</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}}to="/bollywood" className="headLinkText">Bollywood</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}} to="/technology" className="headLinkText">Technology</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}} to="/hollywood" className="headLinkText">Hollywood</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}} to="/fitness" className="headLinkText">Fitness</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}} to="/food" className="headLinkText">Food</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
