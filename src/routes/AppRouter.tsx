import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CountriesListPage from "../pages/CountriesListPage";
import CountryPage from "../pages/CountryPage";

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/countries' element={<CountriesListPage />} />
			<Route path='/countries/:name' element={<CountryPage />} />
			<Route path='*' element={<Navigate to='/countries' replace />} />
		</Routes>
	);
};

export default AppRouter;
