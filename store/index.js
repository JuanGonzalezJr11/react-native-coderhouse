import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import shopReducer from "../features/shopSlice"
import cartReducer from "../features/cartSlice"
import { shopApi } from "../services/shopService"
import { setupListeners } from "@reduxjs/toolkit/query"

const store = configureStore ({
    reducer: {
        counterReducer,
        shopReducer,
        cartReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)

export default store