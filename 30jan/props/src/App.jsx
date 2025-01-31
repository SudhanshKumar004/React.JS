import React from 'react'
import Students from './Students'
import Map from './Map';
import EmpData from './EmpData';
import EmpDesign from './EmpDesign';
import ForCSS from './ForCSS';
const name = "Sudhansh";
const rno = "111";
const fs = "29000";
const sub = "MERN"

const App = () => {

  const ans = EmpData.map((key)=><EmpDesign 
  empno={key.rollno} 
  empnm={key.name} 
  empdes={key.designation} 
  emsal={key.salary} />)
  return (
    <>
     {/*sending values through props*/} 
     {/* <Students nm={name} rno={rno} fs={fs} sub={sub } /> */}
     {/* <Map /> */}

     {/* <h1>Employee Data</h1>
     <table border={2}>
      <tr>
        <th>Emp No.</th>
        <th>Name</th>
        <th>Designation</th>
        <th>Salary</th>
      </tr>
      {ans}
     </table> */}

       <ForCSS />
    </>
  )
}

export default App
