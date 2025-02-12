import React, { useState } from 'react'
import {useSelector , useDispatch} from "react-redux" 
import { colorChange } from './colorSlice'

const Color = () => {
  const [val,setVal] = useState("");

  const myVal = useSelector((state)=>state.mycolor.color)
 
  const dis = useDispatch();
  return (
    <>
      <h1>My Color Change</h1>
      Enter Color Name : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} /> 
      <button onClick={()=>{dis(colorChange({myval:val}))}}>Enter</button>

      <hr />

      <div style={{height:"150px" , width:"200px" , backgroundColor:myVal}}>

      </div>
    </>
  )
}

export default Color
