Crypto Price Tracker
A real-time cryptocurrency price tracking application built with React and Redux. The app displays live cryptocurrency prices, market metrics, and interactive charts with simulated real-time updates.
Show Image
🚀 Features

Real-time price updates for major cryptocurrencies
Interactive 7-day price charts for each coin
Color-coded price change indicators
Market cap, volume, and circulating supply information
Responsive design for desktop and mobile

🛠️ Tech Stack

Frontend Framework: React 18
State Management: Redux (Redux Toolkit)
Data Visualization: Recharts
Styling: Tailwind CSS
Icons: Lucide React
Real-time Updates: Custom WebSocket simulation

🏗️ Architecture
The application follows a modular architecture with clear separation of concerns:
crypto-price-tracker/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── CryptoTable.js
│   │   ├── MiniChart.js
│   │   └── PercentageChange.js
│   ├── slices/       # Feature-based modules
│   │   └── cryptoSlice.js
│   │       
│   │--- MockWebSocketService.js
│   ├── utils/          # Helper functions
│   │   └── formatters.js
│   ├── App.js          # Main application component
│   ├── index.js        # Application entry point
│   └── store.js        # Redux store configuration
└── package.json
Data Flow

Mock WebSocket Service simulates real-time data updates
Updates are dispatched to the Redux Store via actions
Components subscribe to state changes and re-render accordingly
UI components visualize the data with charts and styled elements

🔧 Setup Instructions
Prerequisites

Node.js (v14 or higher)
npm or yarn

Installation

Clone the repository
bashgit clone https://github.com/dinemo-lab/cryptoTracker.git
cd cryptoTracker

Install dependencies
bashnpm install
or with yarn:
bashyarn install

Start the development server
bashnpm start
or with yarn:
bashyarn start

Open your browser and navigate to http://localhost:3000

Building for Production
bashnpm run build
The build artifacts will be stored in the build/ directory.
📦 Dependencies

@reduxjs/toolkit: State management
react-redux: React bindings for Redux
recharts: For creating interactive charts
lucide-react: SVG icon library
tailwindcss: Utility-first CSS framework

💡 Implementation Notes

The application uses a custom mock WebSocket service to simulate real-time data. In a production environment, you would replace this with a connection to a real cryptocurrency API like CoinGecko, Binance, or CoinCap.
Price changes are randomly generated but follow realistic patterns to simulate market volatility.
The app is optimized for performance with Redux selectors to prevent unnecessary re-renders.

Demo Video link :https://www.loom.com/share/16c06cd5e52d461a823f5cb48d577068?sid=65772e6c-bbdd-4a19-b328-66e55b6ed9f9
