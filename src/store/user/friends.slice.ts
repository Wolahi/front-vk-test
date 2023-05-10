import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserRead } from "./user.types";

const initialState: UserRead[] = [];

export const frendsSlice = createSlice({
  name: "frends",
  initialState,
  reducers: {
    initFrendsList: (state, actions: PayloadAction<UserRead[]>) => {
      const date = actions.payload.filter((u) => u !== null);
      // eslint-disable-next-line
      state = date;
      return state;
    },
    removeFromList: (state, actions: PayloadAction<UserRead>) => {
      return state.filter((u) => u.id !== actions.payload.id);
    },
    addToList: (state, action: PayloadAction<UserRead>) => {
      state.push(action.payload);
      return state;
    },
  },
});

const frendsSliceReducer = frendsSlice.reducer;
const frendsSliceActions = frendsSlice.actions;

export { frendsSliceActions, frendsSliceReducer };
