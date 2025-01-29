import React from 'react'
import { Link, Outlet } from 'react-router-dom'



const Layout = () => {
  return (
    <>
    <div style={{display:"flex" , gap:"20px" }}>
        <h1><Link to={'home'}>Home</Link></h1>
        <h1><Link to={'about'}>About</Link></h1>
        <h1><Link to={'insert'}>Contact</Link></h1>
</div>
        <hr />

        <div>
            <Outlet />
        </div>      

        <hr />

        <h1>www.mycompany.com</h1>  
    </>
  )
}

export default Layout
