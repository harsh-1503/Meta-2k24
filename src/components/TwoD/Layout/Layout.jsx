import React from 'react'
import Social from '../Social/Social'
import Landing from '../Landing/Landing'
import Navbar from '../Navbar/Navbar'
import { Center } from '@react-three/drei'

const Layout = () => {
  return (
   
       <>
        <div className='parent' style={{width:'100%',display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center'}}>
            <div style={{width:'50%',margin:'auto'}}><Landing/></div>
        </div>
        <Navbar/>
        <Social/>
       </>
  )
}

export default Layout