import { configureStore } from "@reduxjs/toolkit";
import * as Configs from "./index";

export const Store = configureStore({
  reducer: {
    token: Configs.tokenReducer,
    dataApi: Configs.dataReducer,
  },
});
