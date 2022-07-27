import { configureStore } from "@reduxjs/toolkit";
import mainState from "./reducer/mainState";

export const Store = configureStore({
  reducer: {
    mainState: mainState,
  },
});