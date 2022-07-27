import { createSlice } from "@reduxjs/toolkit";

const mainState = createSlice({
  name: "mainState",
  initialState: {
    home: true,
    link: true,
    blogs: [],
  },
  
  reducers: {
    setHome: (state, actions) => {
      state.home = actions.payload;
    },
    setLink: (state, actions) => {
      state.link = actions.payload
    },
    setBlogs: (state, actions) => {
      state.blogs = actions.payload
    }
  },
});

export const {
  setHome,
  setLink,
  setBlogs,
} = mainState.actions;
export default mainState.reducer;