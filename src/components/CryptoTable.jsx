import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCryptoData } from '../slices/cryptoSlice';
import MockWebSocketService from '../WebService';
import MiniChart from './MiniCharts';
import PercentageChange from './PercentageChange';
import { formatUSD,formatCryptoAmount } from '../utils/Formatter';
import CryptoIcon from './CryptoIcon';

const CryptoTable = () => {
  const cryptoData = useSelector(selectAllCryptoData);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const wsService = new MockWebSocketService(dispatch);
    wsService.connect();
    
    return () => {
      wsService.disconnect();
    };
  }, [dispatch]);
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="w-12 px-2 py-3 text-center">#</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-right">Price</th>
            <th className="px-4 py-3 text-right">1h %</th>
            <th className="px-4 py-3 text-right">24h %</th>
            <th className="px-4 py-3 text-right">7d %</th>
            <th className="px-4 py-3 text-right">Market Cap</th>
            <th className="px-4 py-3 text-right">Volume(24h)</th>
            <th className="px-4 py-3 text-right">Circulating Supply</th>
            <th className="px-4 py-3 text-center">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.id} className="border-b hover:bg-gray-50">
              <td className="px-2 py-4 text-center">{crypto.id}</td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <CryptoIcon symbol={crypto.symbol} className="w-8 h-8 mr-3" />
                  <div className="flex items-center">
                    <span className="font-medium mr-2">{crypto.name}</span>
                    <span className="text-gray-500 text-sm">{crypto.symbol}</span>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-right font-medium">{formatUSD(crypto.price)}</td>
              <td className="px-4 py-4 text-right">
                <PercentageChange value={crypto.change1h} />
              </td>
              <td className="px-4 py-4 text-right">
                <PercentageChange value={crypto.change24h} />
              </td>
              <td className="px-4 py-4 text-right">
                <PercentageChange value={crypto.change7d} />
              </td>
              <td className="px-4 py-4 text-right">{formatUSD(crypto.marketCap)}</td>
              <td className="px-4 py-4 text-right">
                <div>
                  {formatUSD(crypto.volume24h)}
                </div>
                <div className="text-gray-500 text-xs">
                  {formatCryptoAmount(crypto.volumeInCrypto)} {crypto.symbol}
                </div>
              </td>
              <td className="px-4 py-4 text-right">
                <div>
                  {formatCryptoAmount(crypto.circulatingSupply)} {crypto.symbol}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div 
                    className="bg-blue-600 h-1.5 rounded-full" 
                    style={{ 
                      width: crypto.maxSupply 
                        ? `${(crypto.circulatingSupply / crypto.maxSupply) * 100}%` 
                        : '100%' 
                    }}>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <MiniChart data={crypto} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;