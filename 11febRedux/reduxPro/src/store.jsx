import { configureStore } from "@reduxjs/toolkit";
import countSlice from './counterSlice'

const store = configureStore({
    reducer:{
        mycount:countSlice
    }
})


export default store;