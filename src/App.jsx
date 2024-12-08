import InputBox from "./components/InputBox";
import Button from "./components/Button";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const data = useCurrencyInfo(from);

  const options = Object.keys(data);

  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setFrom(to);
    setTo(from);
  };

  const changeCurrency = () => {};

  const convert = () => {
    setConvertedAmount(amount * data[to]);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <InputBox
              label="From"
              amount={amount}
              currency={from}
              currencies={options}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
            <Button
              lable="swap"
              swap={swap}
              className="px-4 py-1 text-white bg-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <InputBox
              label="To"
              amount={convertedAmount}
              currency={to}
              currencies={options}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisabled
            />
            <div className="flex items-center justify-center mb-4">
              <button
                id="swapButton"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                on
              >
                Convert
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

//Convert
//w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500

//swap
// px-4 py-1 text-white bg-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
