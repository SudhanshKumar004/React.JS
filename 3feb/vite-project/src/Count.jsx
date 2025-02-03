import React, { useState } from 'react'
import {message} from 'antd'

const Count = () => {
    const [cnt,setCnt] = useState(0)
    const mydec=()=>{
        if(cnt<=0)
        {
            message.warning("Cant go below Zero")
        }
        else{
            setCnt(cnt-1)
        }
    }
  return (
    <>
    <div style={{textAlign:"center"}}>
    
      <h1>Counter</h1>

       <h1 style={{color:"darkslateblue"}}> Count is : {cnt} </h1>


      <button onClick={()=>{setCnt(cnt+1)}}>Increment</button>
      <button onClick={mydec}>Decrement</button>
    </div>
    </>
  )
}

export default Count
