import {configureStore} from '@reduxjs/toolkit'
import myans from './colorSlice'
import mytodo from './ToDoSlice'

const store = configureStore({
    reducer:{
        mycolor:myans,
        mytask:mytodo
    }
})

export default store;