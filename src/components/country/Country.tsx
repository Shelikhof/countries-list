import React from "react";
import { countryDataApi } from "../../store/Reducers/countryDataApi";
import { validateNumber } from "../../utils/validateNumber";

interface ICountryProp {
	name: string;
}

const Country: React.FC<ICountryProp> = ({ name }) => {
	const { data: flag, isLoading: isLoadingFlag } = countryDataApi.useFetchFlagQuery(name);
	const { data: capital, isLoading: isLoadingCapital } =
		countryDataApi.useFetchCapitalQuery(name);
	const { data: population, isLoading: isLoadingPopulation } =
		countryDataApi.useFetchPopulationQuery(name);
	const { data: currency, isLoading: isLoadingCurrency } =
		countryDataApi.useFetchCurrencyQuery(name);

	return (
		<>
			{!isLoadingFlag && !isLoadingCapital && !isLoadingCurrency && !isLoadingPopulation ? (
				<div className='bg-slate-200 min-h-screen'>
					<div className='container mx-auto px-[5px] text-slate-800 text-xl'>
						<p className='text-3xl text-center mb-3'>{name}</p>
						<div className='md:flex md:gap-x-4 justify-center items-center border-b-2 border-b-white pb-2'>
							<div className='border border-slate-800 rounded-xl overflow-auto bg-white'>
								<img
									src={flag.data.flag}
									className='h-auto w-full object-cover md:w-[550px]'
								/>
								<p className='text-center'>{name}'s flag</p>
							</div>
							<div className='pt-3 md:pt-0'>
								<div className='md:mb-10'>
									<p className=''>
										{name}'s capital: {capital.data.capital}
									</p>
									<p>
										{name}'s population(2018):{" "}
										{validateNumber(
											population.data.populationCounts[
												population.data.populationCounts.length - 1
											].value
										)}
									</p>
									<p>
										{name}'s currence: {currency.data.currency}
									</p>
								</div>

								<div>
									<p className='text-center'>Geographical coordinates:</p>
									<div className='flex gap-y-10 justify-evenly'>
										<p>Long: 21</p>
										<p>Lat: 10</p>
									</div>
								</div>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
							quis excepturi, blanditiis ut reiciendis culpa nesciunt recusandae
							consectetur mollitia aperiam quasi nostrum vitae asperiores accusamus
							suscipit omnis voluptate placeat corporis?
						</p>
					</div>
				</div>
			) : (
				<p>Loading</p>
			)}
		</>
	);
};

export default Country;
