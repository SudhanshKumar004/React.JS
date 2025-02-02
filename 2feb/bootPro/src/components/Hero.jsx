import Carousel from 'react-bootstrap/Carousel';

import React from 'react'

const Hero= () => {
  return (
   <>
 


    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
            style={{height:"100vh"}}
          className="d-block w-100"
          src="images/img1.jpg"
          alt="First slide"
        
        />
        <Carousel.Caption>
          <h2 style={{color:"black"}} >Explore The Universe</h2>
          <p style={{color:"black"}} >The Space is Something fascinating</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            style={{height:"100vh"}}
          className="d-block w-100"
         src="images/img2.jpg"
          alt="Second slide"
          
        />
        <Carousel.Caption>
        <h2 style={{color:"white"}} >Explore The Universe</h2>
          <p style={{color:"white"}} >The Space is Something fascinating</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:"100vh"}} 
          className="d-block w-100" 
          src="images/img3.jpg"
          alt="Third slide"
          
        />
        <Carousel.Caption>
        <h2 style={{color:"white"}} >Explore The Universe</h2>
          <p style={{color:"black"}} >The Space is Something fascinating</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  

   
   </>
  )
}

export default Hero

  
  