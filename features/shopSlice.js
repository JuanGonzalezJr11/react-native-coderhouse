import { createSlice } from "@reduxjs/toolkit"

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        value: {
            categorySelected: "",
            itemIdSelected: "",
            bottomTabSelected: "",
            showBackButton: false
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.categorySelected = action.payload
        },
        setIdSelected: (state, { payload }) => {
            state.value.itemIdSelected = payload
        },
        setBottomTabSelected: (state, { payload }) => {
            state.value.bottomTabSelected = payload
        },
        setShowBackButton: (state, { payload }) => {
            state.value.showBackButton = payload
        }
    }
})

export const { setCategorySelected, setIdSelected, setBottomTabSelected, setShowBackButton } = shopSlice.actions
export default shopSlice.reducer