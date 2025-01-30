import React from 'react'

const EmpDesign = (props) => {
  return (
    <>
    <tr>
        <td>{props.empno}</td>
        <td>{props.empnm}</td>
        <td>{props.empdes}</td>
        <td>{props.emsal}</td>
    </tr>
    </>
  )
}

export default EmpDesign
