import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import { persistStore, persistReducer } from 'redux-persist'
// @ts-ignore
import { CookieStorage } from 'redux-persist-cookie-storage'
// @ts-ignore
import Cookies from 'cookies-js'

const persistConfig = {
  key: 'auth',
  storage: new CookieStorage(Cookies),
}

export const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig,userReducer),
  },
});

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
