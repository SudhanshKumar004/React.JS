import React, { useState } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { addTask, MyDelete , Mycomplete , MyInComplete, taskeditSave } from './TodoSlice'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const ToDo = () => {
    const [input,setInput] = useState("")
    const [status, setStatus] = useState(true)
    const [workId,setWorkId] = useState("")
    const myVal = useSelector(state=>state.mytodo.task)
    const dis = useDispatch();

    const Mydelete=(id)=>{
        dis(MyDelete({id:id}))
    }

    const mycomplete = (id)=>{
        dis(Mycomplete({id:id}))
    }

    const myInComplete=(id)=>{
        dis(MyInComplete({id:id}))
    }

    const myedit=(id,work)=>{
        setInput(work);
        setWorkId(id)
        setStatus(false)
    }
    const myeditsave=()=>{
        dis(taskeditSave({id:workId,data:input}))
        setInput("")
        setStatus(true)
    }
    let sno = 0;
    const ans = myVal.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>
                    {key.compStatus ? 
                    (<> <span style={{color:"red" , textDecoration:"line-through"}}> {key.work} </span> </>) 
                    
                    : (<> {key.work} </>)}

                </td>
                <td><Button variant="danger" onClick={()=>{Mydelete(key.id)}}>Delete</Button></td>
                <td>{key.compStatus ?
                 (<><button onClick={()=>{myInComplete(key.id)}}>InComplete</button></>) 
                 
                : (<> <button onClick={()=>{mycomplete(key.id)}}>Complete</button></>)}</td>

                <td><button onClick={()=>{myedit(key.id,key.work)}}>Edit</button></td>
            </tr>
            </>
        )
    })
  return (
    <>
      <center>
        <h1>My To Do List</h1>
        Enter Task: <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        {status
        ?(<><button onClick={()=>{dis(addTask({id:Date.now(), work:input, compStatus:false}))}}>Add</button></>)  
        :(<><button onClick={myeditsave}>Edit</button></>)}
        
        
        <hr />

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>
      </center>
    </>
  )
}

export default ToDo
