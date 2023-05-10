import { configureStore } from "@reduxjs/toolkit";
import { curUserReducer } from "./user/curUser.slice";
import { frendsSliceReducer } from "./user/friends.slice";

export const store = configureStore({
  reducer: { curUser: curUserReducer, friends: frendsSliceReducer },
});

export type TypeRootState = ReturnType<typeof store.getState>;
