import React from "react";
import { IFlag } from "../../utils/interfaces";
import CountriesItem from "./CountriesItem";

interface IFlagsProp {
	flagsList: IFlag[];
}

const CountriesList: React.FC<IFlagsProp> = ({ flagsList }) => {
	return (
		<div className='bg-slate-200'>
			<p className='text-4xl text-center text-slate-800 mb-3'>List of Countries</p>
			<div className='container mx-auto py-[5px] gap-5 grid justify-items-center xl:grid-cols-3  md:grid-cols-2'>
				{flagsList.map((item) => (
					<CountriesItem
						key={item.name}
						name={item.name}
						flag={item.flag}
						Iso2={item.Iso2}
						Iso3={item.Iso3}
					/>
				))}
			</div>
		</div>
	);
};

export default CountriesList;
