import React from 'react'
import { useState,useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import { IconContext } from 'react-icons/lib'
import{ Nav, NavbarContainer,NavbarLogo,NavbarIcon,MobileIcon, NavMenu,NavItem,
NavLink }from './navbar-elements'
import SignUp from '../../Page/SignUp/SignUp'
 

const Navbar = () => {
const [click,setclick]= useState(false)
const handleclick = ()=>setclick(!click)
const closeMobileMenu = ()=>setclick(false)

const [button , setbutton]=useState(true)
const showButton = ()=>{
  if(window.innerWidth<=960){
    setbutton(false)
  }else{
    setbutton(true)
    }

  }

useEffect(() => {
 showButton()
}, [])

window.addEventListener('resize',showButton);


    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
        <NavbarContainer>
          <NavbarLogo to="/" onclick={closeMobileMenu}>
            <NavbarIcon/>
            ULTRA
            </NavbarLogo>  
            <MobileIcon onClick={handleclick}>
              {click? <FaTimes/> : <FaBars/>}  
            </MobileIcon>   
            <NavMenu onClick={handleclick} click={click}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/security">Security</NavLink>
              </NavItem>
              

              
              { button}
             <SignUp>
               SignUp
             </SignUp>
           
            </NavMenu>
        </NavbarContainer>  
        </Nav>  
        </IconContext.Provider>
        </>
    )
}

export default Navbar

