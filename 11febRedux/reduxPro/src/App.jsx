import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice';

const App = () => {

  const myval = useSelector((state)=>state.mycount.count)
  const dispatch = useDispatch();
  return (
    <>
      <h1>My Counter App</h1>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <h2>{myval}</h2>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}

export default App
