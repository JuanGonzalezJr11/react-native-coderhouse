import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import shopReducer from "../features/shopSlice"

export default configureStore ({
    reducer: {
        counterReducer,
        shopReducer
    }
})