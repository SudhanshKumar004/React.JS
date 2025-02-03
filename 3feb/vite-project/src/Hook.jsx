import React, { useState } from 'react'

const Hook = () => {

    const [color , setColor] = useState("red")

    
  return (
    <>
      <h1 style={{color:color}}>My Favourite color is : {color}</h1>
      <button onClick={()=>{setColor("blue")}}>Blue!</button>
      <button onClick={()=>{setColor("green")}}>Green!</button>
      <button onClick={()=>{setColor("orange")}}>Orange!</button>
      <button onClick={()=>{setColor("yellow")}}>Yellow!</button>
    </>
  )
}

export default Hook

 