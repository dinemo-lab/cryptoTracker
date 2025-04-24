import React from 'react';

const CryptoIcon = ({ symbol, className }) => {
  // Map of crypto symbols to their color codes
  const iconColors = {
    BTC: '#F7931A',
    ETH: '#627EEA',
    USDT: '#26A17B',
    XRP: '#23292F',
    BNB: '#F3BA2F',
    SOL: '#14F195',
  };

  // Default style
  const style = {
    backgroundColor: iconColors[symbol] || '#CCCCCC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    color: symbol === 'BTC' || symbol === 'BNB' ? '#000' : '#FFF',
    fontWeight: 'bold',
  };

  return (
    <div className={`${className || 'w-8 h-8'}`} style={style}>
      {symbol.substring(0, 1)}
    </div>
  );
};

export default CryptoIcon;
