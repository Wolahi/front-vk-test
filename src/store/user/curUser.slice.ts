import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserRead } from "./user.types";

const initialState: UserRead = {
  id: 0,
  email: "",
  username: "",
  surname: "",
  avatar: "",
  bg_img: "",
  edu: "",
  num_telephone: "",
  info: "",
  city: "",
  is_active: true,
  is_superuser: false,
  is_verified: false,
};

export const curUserSlice = createSlice({
  name: "curUser",
  initialState,
  reducers: {
    addCurUser: (state, actions: PayloadAction<UserRead>) => {
      // eslint-disable-next-line
      state = actions.payload;
      return state;
    },
  },
});

const curUserReducer = curUserSlice.reducer;
const curUserActions = curUserSlice.actions;

export { curUserActions, curUserReducer };
