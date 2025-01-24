import React from 'react'
import { CompanyTenK } from '../../../company'
import { Link } from 'react-router-dom';

type Props = {
    tenK: CompanyTenK;
}

const TenKFinderItem = ({tenK}: Props) => {
    const fillingData = new Date(tenK.fillingDate).getFullYear();
    return (
        <Link
  reloadDocument
  to={tenK.finalLink}
  type="button"
  className="inline-flex items-center px-6 p-3 text-md font-semibold text-white bg-gradient-to-r from-lightGreen to-green-400 rounded-lg hover:from-green-400 hover:to-lightGreen transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
>
  <span className="text-lg">{`10K - ${tenK.symbol} - ${fillingData}`}</span>
</Link>

  )
}

export default TenKFinderItem