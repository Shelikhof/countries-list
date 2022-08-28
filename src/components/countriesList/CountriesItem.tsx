import React from "react";
import { IFlag } from "../../utils/interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const CountriesItem: React.FC<IFlag> = ({ name, flag, Iso2, Iso3 }) => {
	return (
		<Link
			to={`/countries/${name}`}
			className='w-full min-h-[100px] md:w-[320px] md:h-[195px] lg:w-[400px] lg:h-[260px] text-slate-800 border border-slate-800 rounded-[12px] bg-white overflow-hidden hover:bg-slate-800 hover:text-white transition-all hover:shadow-lg cursor-pointer'
		>
			<LazyLoadImage
				src={flag}
				className='w-full md:h-[80%] border-b border-slate-800 object-cover'
				alt={name}
			/>
			<p className=' text-lg text-center my-4 md:mt-[5px] lg:mt-[12px]'>{name}</p>
		</Link>
	);
};

export default CountriesItem;
