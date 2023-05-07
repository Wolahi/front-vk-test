import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./user/user.api";

export const store = configureStore({
  reducer: { [userApi.reducerPath]: userApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
