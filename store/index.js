import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import shopReducer from "../features/shopSlice"
import cartReducer from "../features/cartSlice"
import authReducer from "../features/userSlice"
import { shopApi } from "../services/shopService"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authApi } from "../services/authService"

const store = configureStore ({
    reducer: {
        counterReducer,
        shopReducer,
        cartReducer,
        authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store