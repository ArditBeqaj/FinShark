import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';
import { PortfolioGet } from '../../../Models/Portfolio';

interface Props{
    portfolioValue: PortfolioGet;
    onPortfolioDelete: (e : SyntheticEvent) => void;
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    <div className="flex flex-col w-full p-6 text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 md:w-1/3 bg-gray-100">

    <Link
      to={`/company/${portfolioValue.symbol}/company-profile`}
      className="pt-4 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
    >
      {portfolioValue.symbol}
    </Link>
    <div className="mt-4">
      <DeletePortfolio
        portfolioValue={portfolioValue.symbol}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  </div>
  
  )
}

export default CardPortfolio