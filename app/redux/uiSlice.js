"use client"
import { createSlice } from "@reduxjs/toolkit";


export const uiSlice = createSlice({
    name:'UI',
    initialState:true,
    reducers:{
        toggleProjectMenu:(state) =>
            state = !state
    }
})
export const {toggleProjectMenu} = uiSlice.actions
export default uiSlice.reducer