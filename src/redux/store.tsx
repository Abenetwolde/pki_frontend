import { formApi } from '@/app/api';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    [formApi.reducerPath]: formApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;