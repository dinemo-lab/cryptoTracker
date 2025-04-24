 
import './App.css'
import CryptoTable from './components/CryptoTable'
function App() {
   

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Crypto Price Tracker</h1>
          <p className="text-gray-600">Real-time cryptocurrency prices and market data</p>
        </header>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <CryptoTable />
        </div>
        
      
      </div>
    </div>
  )
}

export default App
