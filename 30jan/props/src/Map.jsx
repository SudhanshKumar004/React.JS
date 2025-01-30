import React from 'react'

const Map = () => {

    const stuData = [
        {
            "rollno":"1",
            "name":"Sudhansh",
            "subject":"MERN",
            "fees":"20,000"
        },
        
        {
            "rollno":"2",
            "name":"Anshul",
            "subject":"MERN",
            "fees":"25,000"
        },
        
        {
            "rollno":"3",
            "name":"Vikas",
            "subject":"MERN",
            "fees":"30,000"
        },
        
        {
            "rollno":"4",
            "name":"Harsh",
            "subject":"Java",
            "fees":"40,000"
        },
        
        {
            "rollno":"5",
            "name":"Dhruv",
            "subject":"Python",
            "fees":"15,000"
        }
    ]

    const ans=stuData.map((key)=>{
        return(
            <>
            <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.subject}</td>
            <td>{key.fees}</td>
            </tr>
            </>
        )
    })
  return (
    <>
    {/* <hr size="4" color='red'/> */}
      <h1>Details</h1>
      <table border={1}>
        <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Fees</th>
        </tr>
         {ans}
      </table>
    </>
  )
}

export default Map
