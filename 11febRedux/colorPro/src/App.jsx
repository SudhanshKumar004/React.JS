import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { bgColorChange } from './colorSlice'
const App = () => {
  const bgcolor = useSelector(state=>state.bgcolor.bgcolor)
  const dis = useDispatch();
  return (
    <>
      <h1>My Color Change</h1>
      <button onClick={()=>{dis(bgColorChange())}}>Change</button>
      <div style={{width:"200px" , height:"150px" , backgroundColor:bgcolor}}>

      </div>
    </>
  )
}

export default App
