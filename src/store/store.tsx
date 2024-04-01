import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter/counter";
import heading from "./features/heading/heading";
import { pokemonApi } from "./services/pokemon";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter,
    heading,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
