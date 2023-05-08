import { configureStore } from "@reduxjs/toolkit";
import { curUserReducer } from "./user/curUser.slice";

export const store = configureStore({
  reducer: { curUser: curUserReducer },
});

export type TypeRootState = ReturnType<typeof store.getState>;
