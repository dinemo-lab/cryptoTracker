import { updateCryptoData } from './slices/cryptoSlice';
import { store } from './store';

class MockWebSocketService {
  constructor(dispatch) {
    this.dispatch = dispatch;
    this.interval = null;
  }

  connect() {
    this.interval = setInterval(() => {
      // Generate random updates for each crypto
      for (let i = 1; i <= 5; i++) {
        this.generateRandomUpdate(i);
      }
    }, 1500);
  }

  disconnect() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  generateRandomUpdate(id) {
    const currentState = store.getState().crypto;
    const crypto = currentState.find(c => c.id === id);
    
    if (!crypto) return;
    
    // Generate random price change within ±1%
    const priceChangePercent = (Math.random() * 2 - 1) / 100;
    const newPrice = crypto.price * (1 + priceChangePercent);
    
    // Generate random percentage changes
    const change1h = crypto.change1h + (Math.random() * 0.2 - 0.1); // ±0.1%
    const change24h = crypto.change24h + (Math.random() * 0.4 - 0.2); // ±0.2%
    const change7d = crypto.change7d + (Math.random() * 0.6 - 0.3); // ±0.3%
    
    // Generate random volume change within ±3%
    const volumeChangePercent = (Math.random() * 6 - 3) / 100;
    const newVolume = crypto.volume24h * (1 + volumeChangePercent);
    const newVolumeInCrypto = crypto.volumeInCrypto * (1 + volumeChangePercent);
    
    // Update the chart data by shifting and adding a new value
    const newChartData = [...crypto.chartData.slice(1), { 
      date: 'Now', 
      price: newPrice 
    }];
    
    // Dispatch update action
    this.dispatch(updateCryptoData({
      id,
      updates: {
        price: parseFloat(newPrice.toFixed(2)),
        change1h: parseFloat(change1h.toFixed(2)),
        change24h: parseFloat(change24h.toFixed(2)),
        change7d: parseFloat(change7d.toFixed(2)),
        volume24h: Math.round(newVolume),
        volumeInCrypto: parseFloat(newVolumeInCrypto.toFixed(2)),
        chartData: newChartData
      }
    }));
  }
}

export default MockWebSocketService;