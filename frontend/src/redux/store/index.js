import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import postsReducer from "../reducers/postReducer";
import remindersReducer from "../reducers/reminderReducer";
import followElementReducer from "../reducers/followElementReducer";
import authReducer from "../reducers/authReducer";
import profileElementReducer from "../reducers/profileElementReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET,
    }),
  ],
};

const rootReducer = combineReducers({
  posts: postsReducer,
  reminders: remindersReducer,
  followElements: followElementReducer,
  auth: authReducer,
  profileElements: profileElementReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
