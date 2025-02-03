import React from 'react'
import Hook from './Hook'
import Count from './Count'
import Form from './Form'

const App = () => {
  
  const college=(nm)=>{
    alert(`My College name is ${nm}`)
  }

  const show=()=>{
    alert("Welcome to Bhopal")
  }

  const Myname=(nm , e)=>{
    alert(`MyName Is ${nm} Type: ${e.type}`)
    console.log(e);
    
  }
  return (
    <>

    {/* <h1>Welcome</h1>
    <button onClick={()=>{college("bansal")}}>Click</button><br />
    <button onClick={()=>{show()}}>Click For Show</button><br />
    <button onClick={(e)=>{Myname("Sudhansh" , e)}}>Name</button> */}
    {/* <Hook /> */}
    {/* <Count /> */}
    < Form />
    </>
  )
}

export default App
