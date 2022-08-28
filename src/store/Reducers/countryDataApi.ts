import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryDataApi = createApi({
	reducerPath: "countryDataApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://countriesnow.space/api/v0.1/countries" }),
	endpoints: (builder) => ({
		fetchFlag: builder.query<any, string | undefined>({
			query: (name) => ({
				method: "POST",
				url: "flag/images",
				body: {
					country: name,
				},
			}),
		}),
		fetchPopulation: builder.query<any, string | undefined>({
			query: (name) => ({
				method: "POST",
				url: "population",
				body: {
					country: name,
				},
			}),
		}),
		fetchCapital: builder.query<any, string | undefined>({
			query: (name) => ({
				method: "POST",
				url: "capital",
				body: {
					country: name,
				},
			}),
		}),
		fetchCurrency: builder.query<any, string | undefined>({
			query: (name) => ({
				method: "POST",
				url: "currency",
				body: {
					country: name,
				},
			}),
		}),
	}),
});
