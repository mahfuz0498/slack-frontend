import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
    navBurger: false
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
    changeNavBurger: (state, action) => {
      state.navBurger = !state.navBurger;
    }
  }
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = state => state.app.roomId;

export const { changeNavBurger } = appSlice.actions;
export const selectNavBurger = state => state.app.navBurger;

export default appSlice.reducer;
