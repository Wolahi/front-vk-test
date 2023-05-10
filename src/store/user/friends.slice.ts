import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserRead } from "./user.types";

const initialState: UserRead[] = [];

export const frendsSlice = createSlice({
  name: "frends",
  initialState,
  reducers: {
    initFrendsList: (state, actions: PayloadAction<UserRead[]>) => {
      // eslint-disable-next-line
      state = actions.payload;
      return state;
    },
    removeFromList: (state, actions: PayloadAction<number>) => {
      state.filter((u) => u.id !== actions.payload);
      return state;
    },
  },
});

const frendsSliceReducer = frendsSlice.reducer;
const frendsSliceActions = frendsSlice.actions;

export { frendsSliceActions, frendsSliceReducer };
