import { configureStore } from "@reduxjs/toolkit";
import { countryDataApi } from "./Reducers/countryDataApi";
import flagsSlice from "./Reducers/flagsSlice";

const store = configureStore({
	reducer: {
		flags: flagsSlice,
		[countryDataApi.reducerPath]: countryDataApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countryDataApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
