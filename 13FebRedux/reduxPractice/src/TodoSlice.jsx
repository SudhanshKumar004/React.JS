import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name:"task",
    initialState:{
        task:[]
    },

    reducers:{
        addTask:(state,actions)=>{
            console.log(actions.payload);
            
            state.task.push(actions.payload)
        },

        MyDelete:(state , actions)=>{
            console.log(actions.payload);

            state.task= state.task.filter(item=>item.id != actions.payload.id);
            
        },

        Mycomplete:(state,actions)=>{
                for(let i=0;i<state.task.length;i++)
                {
                    if(state.task[i].id == actions.payload.id)
                    {
                        state.task[i].compStatus = true; 
                    }
                }
                console.log(actions.payload.id);
                
        },

        MyInComplete:(state,actions)=>{
            for(let i =0;i<state.task.length; i++)
            {
                if(state.task[i].id == actions.payload.id)
                {
                    state.task[i].compStatus = false;
                }
            }
        },
        taskeditSave:(state,actions)=>{
            console.log(actions.payload);
            
            for(let i =0;i<state.task.length; i++)
                {
                    if(state.task[i].id == actions.payload.id)
                    {
                        state.task[i].work = actions.payload.data;
                    }
                }            
        }
    }
})

export const {addTask ,
              MyDelete ,
              Mycomplete ,
              MyInComplete,
              taskeditSave } = toDoSlice.actions;
              
export default toDoSlice.reducer; 