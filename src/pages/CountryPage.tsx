import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Country from "../components/country/Country";

const CountryPage = () => {
	const { name } = useParams();

	const [error, setError] = useState(false);

	useEffect(() => {
		axios({
			method: "post",
			url: "https://countriesnow.space/api/v0.1/countries/iso",
			data: {
				country: name,
			},
		}).catch(function (error) {
			setError(true);
		});
	}, [name]);

	return <>{!error && name ? <Country name={name} /> : <h1>NO DATA</h1>}</>;
};

export default CountryPage;
