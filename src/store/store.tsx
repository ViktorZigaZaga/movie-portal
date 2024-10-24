import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { moviesApi } from "./services/movies";
import movies from "./features/moviesSlice";
import auth from "./features/authSlice";
// import { listenerMiddleware } from "../middlewares/myMiddleware";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    movies,
    auth,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      moviesApi.middleware,
    )
    // .prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;