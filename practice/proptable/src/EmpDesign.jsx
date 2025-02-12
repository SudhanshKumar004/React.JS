import React from 'react'

const EmpDesign = (props) => {
  return (
    <>
    <tr>
        <td>{props.empno}</td>
        <td>{props.name}</td>
        <td>{props.des}</td>
        <td>{props.salary}</td>
    </tr>
      
    </>
  )
}

export default EmpDesign
