import { createSlice } from '@reduxjs/toolkit';

// Sample crypto data
const initialCryptoData = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 93759.48,
    change1h: 0.43,
    change24h: 0.93,
    change7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    volumeInCrypto: 467.81,
    circulatingSupply: 19850000,
    maxSupply: 21000000,
    chartData: [
      { date: 'Mon', price: 88000 },
      { date: 'Tue', price: 89500 },
      { date: 'Wed', price: 90200 },
      { date: 'Thu', price: 91000 },
      { date: 'Fri', price: 92500 },
      { date: 'Sat', price: 93200 },
      { date: 'Sun', price: 93759 },
    ]
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 1802.46,
    change1h: 0.60,
    change24h: 3.21,
    change7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    volumeInCrypto: 13050,
    circulatingSupply: 120710000,
    maxSupply: null,
    chartData: [
      { date: 'Mon', price: 1650 },
      { date: 'Tue', price: 1680 },
      { date: 'Wed', price: 1720 },
      { date: 'Thu', price: 1750 },
      { date: 'Fri', price: 1770 },
      { date: 'Sat', price: 1790 },
      { date: 'Sun', price: 1802 },
    ]
  },
  {
    id: 3,
    name: 'Tether',
    symbol: 'USDT',
    price: 1.00,
    change1h: 0.00,
    change24h: 0.00,
    change7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    volumeInCrypto: 92258,
    circulatingSupply: 145270000000,
    maxSupply: null,
    chartData: [
      { date: 'Mon', price: 1.00 },
      { date: 'Tue', price: 1.00 },
      { date: 'Wed', price: 1.00 },
      { date: 'Thu', price: 1.00 },
      { date: 'Fri', price: 1.00 },
      { date: 'Sat', price: 1.00 },
      { date: 'Sun', price: 1.00 },
    ]
  },
  {
    id: 4,
    name: 'XRP',
    symbol: 'XRP',
    price: 2.22,
    change1h: 0.46,
    change24h: 0.54,
    change7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    volumeInCrypto: 2308,
    circulatingSupply: 58390000000,
    maxSupply: 100000000000,
    chartData: [
      { date: 'Mon', price: 2.05 },
      { date: 'Tue', price: 2.08 },
      { date: 'Wed', price: 2.12 },
      { date: 'Thu', price: 2.15 },
      { date: 'Fri', price: 2.18 },
      { date: 'Sat', price: 2.20 },
      { date: 'Sun', price: 2.22 },
    ]
  },
  {
    id: 5,
    name: 'BNB',
    symbol: 'BNB',
    price: 606.65,
    change1h: 0.09,
    change24h: -1.20,
    change7d: 3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    volumeInCrypto: 3080,
    circulatingSupply: 140890000,
    maxSupply: 200000000,
    chartData: [
      { date: 'Mon', price: 582 },
      { date: 'Tue', price: 590 },
      { date: 'Wed', price: 595 },
      { date: 'Thu', price: 610 },
      { date: 'Fri', price: 605 },
      { date: 'Sat', price: 608 },
      { date: 'Sun', price: 606 },
    ]
  }
];

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: initialCryptoData,
  reducers: {
    updateCryptoData: (state, action) => {
      const { id, updates } = action.payload;
      const cryptoIndex = state.findIndex(crypto => crypto.id === id);
      if (cryptoIndex !== -1) {
        state[cryptoIndex] = { ...state[cryptoIndex], ...updates };
      }
    }
  }
});

export const { updateCryptoData } = cryptoSlice.actions;

// Selectors
export const selectAllCryptoData = state => state.crypto;
export const selectCryptoById = (state, id) => state.crypto.find(crypto => crypto.id === id);

export default cryptoSlice.reducer;
