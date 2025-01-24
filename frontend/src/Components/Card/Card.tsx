import React, { SyntheticEvent } from 'react'
import "./Card.css"
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';


interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate : (e : SyntheticEvent ) => void;
}

const Card : React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props): JSX.Element => {
  return (
    <div
  className="flex flex-col items-center justify-between w-full p-6 bg-gray-50 shadow-xl rounded-lg space-y-6 md:flex-row md:space-y-0 md:space-x-8 hover:shadow-2xl transition-shadow duration-300"
  key={id}
  id={id}
>
  {/* Company Link */}
  <Link
    to={`/company/${searchResult.symbol}/company-profile`}
    className="font-bold text-center text-indigo-700 hover:text-indigo-800 md:text-left transition duration-200"
  >
    {searchResult.name} ({searchResult.symbol})
  </Link>

  {/* Currency */}
  <p className="text-gray-600 text-sm md:text-base">
    <span className="font-semibold">Currency:</span> {searchResult.currency}
  </p>

  {/* Exchange Details */}
  <p className="font-bold text-gray-900 text-sm md:text-base">
    {searchResult.exchangeShortName} - {searchResult.stockExchange}
  </p>

  {/* Add to Portfolio Button */}
  <AddPortfolio
    onPortfolioCreate={onPortfolioCreate}
    symbol={searchResult.symbol}
  />
</div>


  )
}

export default Card