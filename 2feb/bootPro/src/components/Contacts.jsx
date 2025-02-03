import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <form action="" style={{backgroundColor:"cadetblue", boxShadow:"0 0 5px silver, 0 0 5px black"}}>
        <label htmlFor="">Enter Name</label>
        <input type="text"  />
        <br />
        <label htmlFor="">Enter City</label>
        <input type="text"  />
        <br />
        <label htmlFor="">Enter Age</label>
        <input type="text"  />
        <br />
        <label htmlFor="">Enter Email</label>
        <input type="email"  />
        <br />
        Description : <textarea name="comment" id="" />



    </form>

    <Footer />
    
    </>
  )
}

export default Contact