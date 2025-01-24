import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinner/Spinner";
import TenKFinder from "../../Components/TenKFinder/TenKFinder";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName}></Tile>
            <Tile
              title="Price"
              subTitle={"$" + company.price.toString()}
            ></Tile>
            <Tile title="Sector" subTitle={company.sector}></Tile>
            <Tile title="DCF" subTitle={"$" + company.dcf.toString()}></Tile>

            <TenKFinder ticker={company.symbol} />

            <p className="bg-white shadow-lg rounded-lg text-gray-800 p-5 mt-4 mx-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 ease-in-out mb-7 sm:text-sm md:text-base lg:text-lg xl:text-xl sm:p-6 md:p-8 lg:p-10">
  {company.description}
</p>


          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
