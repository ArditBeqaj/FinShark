using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Stock;
using api.Models;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace api.Mappers
{
    public static class StockMappers
    {
        public static StockDTO ToStockDTO(this Stock stockModel){
            return new StockDTO{
                Id = stockModel.Id,
                Symbol = stockModel.Symbol,
                CompanyName = stockModel.CompanyName,
                Purchase = stockModel.Purchase,
                LastDiv = stockModel.LastDiv,
                Industry = stockModel.Industry,
                MarketCap = stockModel.MarketCap
            };
        }

        public static Stock ToStockFromCreateDTO(this CreateStockRequestDTO StockDTO){

            return new Stock{
                Symbol = StockDTO.Symbol,
                CompanyName = StockDTO.CompanyName,
                Purchase = StockDTO.Purchase,
                LastDiv = StockDTO.LastDiv,
                Industry = StockDTO.Industry,
                MarketCap = StockDTO.MarketCap
            };
        }
    }
}