import React from 'react'
import {InfoSection} from '../../Components'
import { HomeObj,HomeObj1, HomeObj2 ,HomeObj3} from './Data'
function HomePage(){
    return (
        <>
      <InfoSection {...HomeObj}/>   
      <InfoSection {...HomeObj1}/> 
      <InfoSection {...HomeObj2}/> `` 
      <InfoSection {...HomeObj3}/>    
        </>
    )
}

export default HomePage