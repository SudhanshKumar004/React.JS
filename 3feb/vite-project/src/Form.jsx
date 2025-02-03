import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const subHandle = (e) => {
    const inp = { name: name, city: city };
    console.log(inp);
  };

  return (
    <>
      <h1>Application Form</h1>
        
          Enter Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
          Enter City: <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /> <br />
        <button onClick={subHandle}>Submit</button>
      
    </>
  );
};

export default Form;
