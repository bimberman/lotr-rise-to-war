import { configureStore } from "@reduxjs/toolkit";
import data from "../reducers/data";
import filters from "../reducers/filters";
import navigation from "../reducers/navigation";

export const store = configureStore({
  reducer: { data, filters, navigation },
});
