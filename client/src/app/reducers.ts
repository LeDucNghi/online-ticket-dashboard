import { authReducer } from "../features/auth/auth-slice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  auth: authReducer,
});
