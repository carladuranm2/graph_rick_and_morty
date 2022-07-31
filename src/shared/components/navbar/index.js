import React from 'react'
import logo from '../../assets/logo.svg'
import {WrapperLogo, WrapperNavbar} from './styled'

export default function Navbar(){
    return (
        <WrapperNavbar>
            <WrapperLogo>
                <img alt='logo' src={logo}/>
            </WrapperLogo>
        </WrapperNavbar>
    )
}