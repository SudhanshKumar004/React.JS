import React, { useEffect, useState } from 'react'


const Effect = () => {
    const [count,setCount] = useState(0);
    const [multi,setMulti] = useState(0);

    useEffect(()=>{
        setMulti(count*2);
    },[count])
  return (
    <>
      <h1>Count is: {count}</h1>
      <h1>Multiplication is : {multi}</h1>
      <button onClick={()=>{setCount(count+1)}}>Click</button>
    </>
  )
}

export default Effect
