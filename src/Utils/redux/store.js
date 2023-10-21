import { configureStore } from "@reduxjs/toolkit";
import { Combine } from "./combine";

export const Store = configureStore({
    reducer: Combine
})