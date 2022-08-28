import React, { useEffect } from "react";
import CountriesList from "../components/countriesList/CountriesList";
import { useAppDispatch, useAppSelector } from "../hook";
import { fetchFlags } from "../store/Reducers/flagsSlice";

const CountriesListPage: React.FC = () => {
	const flags = useAppSelector((state) => state.flags);
	const flagsList = flags.flagsList;

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchFlags());
	}, [dispatch]);

	return (
		<div>
			{flags.status === "resolved" ? (
				<CountriesList flagsList={flagsList} />
			) : (
				<p>Загрузка</p>
			)}
		</div>
	);
};

export default CountriesListPage;
