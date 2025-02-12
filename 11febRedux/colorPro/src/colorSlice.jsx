import {createSlice} from '@reduxjs/toolkit'

const colorSlice = createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"pink"
    },

    reducers:{
        bgColorChange:(state)=>{
            state.bgcolor="red";
        }
    }
})


export const {bgColorChange} = colorSlice.actions;
export default colorSlice.reducer;