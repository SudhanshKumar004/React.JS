import React from 'react'
import EmpDesign from './EmpDesign'
import EmpData from './EmpData'
const App = () => {

  const ans = EmpData.map((key)=><EmpDesign
    empno={key.empno}
    name={key.name}
    des={key.designation}
    salary={key.salary}
  />)
  return (
    <>
      <table border={1}>
        <tr>
          <th>Emp No.</th>
          <th>Emp Name</th>
          <th>Emp Designation</th>
          <th>Emp Salary</th>
        </tr>
    {ans}
      </table>
    </>
  )
}

export default App
