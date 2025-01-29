import React from 'react'
import { Link, Outlet } from 'react-router-dom' 
const About = () => {
  return (
    <>
     <h1>About Page</h1> 

     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, mollitia consectetur. Id corporis sint dolore quis commodi quibusdam consequuntur rem!</p>

     <div style={{display:"flex" , gap:"20px"}}>
    <h1><Link to={'details'}>Details</Link></h1>
    <h1><Link to={'dashboard'}>dashboard</Link></h1>
    <h1><Link to={'settings'}>Settings</Link></h1>
     </div>
     <hr />
     <Outlet />

     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus aliquid nisi cumque, itaque corrupti porro architecto quia aspernatur incidunt labore nam, soluta at laboriosam obcaecati beatae recusandae minus? Cumque?</p>
    </>
  )
}

export default About
