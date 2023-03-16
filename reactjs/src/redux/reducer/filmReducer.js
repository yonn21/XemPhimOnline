import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const filmReducer = createSlice({
  name: "film",
  initialState,
  reducers: {}
});

export const { get } = filmReducer.actions

export default filmReducer.reducer