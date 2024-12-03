function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          <div className="mb-4">
            <label
              htmlFor="fromAmount"
              className="block text-sm font-medium text-gray-700"
            >
              From
            </label>
            <div className="flex mt-1">
              <input
                id="fromAmount"
                type="number"
                placeholder="0"
                className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                id="fromCurrency"
                className="p-2 border rounded-r-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="usd">USD</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              id="swapButton"
              className="px-4 py-1 text-white bg-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Swap
            </button>
          </div>
          <div className="mb-4">
            <label
              htmlFor="toAmount"
              className="block text-sm font-medium text-gray-700"
            >
              To
            </label>
            <div className="flex mt-1">
              <input
                id="toAmount"
                type="number"
                placeholder="0"
                className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                id="toCurrency"
                className="p-2 border rounded-r-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="usd">USD</option>
              </select>
            </div>
          </div>
          <button
            id="convertButton"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
