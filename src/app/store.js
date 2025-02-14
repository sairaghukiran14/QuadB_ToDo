import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState: {
    tasks: preloadedState || [],
  },
});

store.subscribe(() => {
  saveState(store.getState().tasks);
});

export default store;
