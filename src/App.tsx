import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
    setAmount(convertedAmount)
  }

  const convertCurrency = () => {
    setConvertedAmount(amount * (currencyInfo[to] as number));
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[url('https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg')] bg-cover">
      <div className="max-w-lg w-full p-8 bg-blue-300 bg-opacity-25 flex flex-col gap-4 justify-center items-center rounded-lg relative">
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom} // This might cause some issue
          currencyOptions={options}
          selectCurrency={from}
        />
        <button
          className="w-fit bg-blue-500 hover:bg-blue-700 text-yellow-50 rounded-md px-2 py-1 border-2 border-white absolute left-1/2 -translate-x-1/2 -translate-y-7"
          onClick={swap}
        >
          swap
        </button>
        <InputBox
          label="To"
          amount={convertedAmount}
          onAmountChange={setAmount}
          onCurrencyChange={setTo} // This might cause some issue
          currencyOptions={options}
          selectCurrency={to}
          amountDisable
        />
        <button
          className="w-full p-2 bg-blue-500 hover:bg-blue-600 rounded-md text-yellow-50"
          onClick={convertCurrency}
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  )
}

export default App;
