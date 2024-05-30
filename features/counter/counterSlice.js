import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 1
    },
    reducers: {
        increment: (state, {payload}) => {
            state.value = Number(payload) + 1
        },
        decrement: (state, {payload}) => {
            state.value = Number(payload) - 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        reset: (state) => {
            state.value = 1
        },
        assignValue: (state, {payload}) => {
            state.value = Number(payload)
        }
    }
})

export const {increment, decrement, incrementByAmount, reset, assignValue} = counterSlice.actions
export default counterSlice.reducer