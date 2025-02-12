import {configureStore} from '@reduxjs/toolkit'
import bgColorChange  from './colorSlice';

const store = configureStore({
    reducer:{
        bgcolor:bgColorChange 
    }
}) 

export default store;