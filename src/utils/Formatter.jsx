export const formatUSD = (number) => {
  if (number >= 1000000000) {
    return `$${(number / 1000000000).toFixed(2)}B`;
  } else if (number >= 1000000) {
    return `$${(number / 1000000).toFixed(2)}M`;
  } else if (number >= 1000) {
    return `$${(number / 1000).toFixed(2)}K`;
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number);
};

// Format large numbers
export const formatNumber = (number) => {
  if (number === null || number === undefined) return 'N/A';
  
  if (number >= 1000000000000) {
    return `${(number / 1000000000000).toFixed(2)}T`;
  } else if (number >= 1000000000) {
    return `${(number / 1000000000).toFixed(2)}B`;
  } else if (number >= 1000000) {
    return `${(number / 1000000).toFixed(2)}M`;
  } else if (number >= 1000) {
    return `${(number / 1000).toFixed(2)}K`;
  }
  return number.toFixed(2);
};

// Format crypto amounts
export const formatCryptoAmount = (amount) => {
  if (amount >= 1000000000) {
    return `${(amount / 1000000000).toFixed(2)}B`;
  } else if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(2)}M`;
  } else if (amount >= 1000) {
    return `${(amount / 1000).toFixed(2)}K`;
  }
  return amount.toFixed(2);
};

// Format percentage
export const formatPercentage = (percent) => {
  const absValue = Math.abs(percent).toFixed(2);
  return percent > 0 ? `${absValue}%` : `${absValue}%`;
};