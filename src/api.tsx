import axios from "axios"
import { CompanyProfile, CompanySearch } from "./company"

interface SearchResponse{
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=YAJ0TxfOj8le8a8ChEMjbLJ3BqpFBIfN`
          );
       return data;   
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message", error.message);
            return error.message;
        }else{
            console.log("unexpected error:", error)
            return " an expected error has accured "
        }
    }
}

export const getCompanyProfile = async (query: string) =>{
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=YAJ0TxfOj8le8a8ChEMjbLJ3BqpFBIfN`
        )
        return data;
    } catch (error: any) {
        console.log("error message from api:", error.message)
    }
}