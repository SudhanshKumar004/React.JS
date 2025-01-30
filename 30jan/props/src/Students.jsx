import React from 'react'

const Students = (props) => {
  return (
    <>
      <h1>Enter Name:{props.nm}</h1>
      <h1>Enter Roll No:{props.rno}</h1>
      <h1>Enter subj:{props.sub}</h1>
      <h1>Enter Fees:{props.fs}</h1>
    </>
  )
}

export default Students
