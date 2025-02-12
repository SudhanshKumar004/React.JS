import React, { useState } from 'react'
import Effect from './Effect';

const App = () => {

  const[input,setInput] = useState({});

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setInput((key)=>({...key , [name]: value}))
  }

  const hsubmit=()=>{
    console.log(input);
    
  }

  return (
    <>
      <h1>Application form</h1>
      Enter Name: <input type="text" name="name" onChange={handleInput} /> <br />
      Enter City: <input type="text" name="city" onChange={handleInput} /> <br />
      Enter Subject: <input type="text" name="subject" onChange={handleInput} /> <br />
      Enter Fees: <input type="text" name="fees" onChange={handleInput} /> <br />
      <button onClick={hsubmit}>Save</button>


      <Effect />
    </>
  )
}

export default App
