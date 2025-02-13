import {configureStore} from '@reduxjs/toolkit'
import myslice from './TodoSlice'

const store = configureStore({
    reducer:{
        mytodo : myslice
    }
})

export default store