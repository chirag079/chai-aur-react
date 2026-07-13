import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';

function App() {
  const [amount, setAmount]=useState(0);
  const [convertedAmount, setConvertedAmount]=useState(0);
  const [fromCurrency, setFromCurrency]=useState("usd");
  const [toCurrency, setToCurrency]=useState("npr");

  const currencyData=useCurrencyInfo(fromCurrency)

  const options=Object.keys(currencyData)


  const swap=()=>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }


  const convert = () => {
    setConvertedAmount(amount * currencyData[toCurrency])
  }

  return (
    <div className="h-screen w-full items-center justify-center flex flex-col gap-4 bg-gradient-to-r from-emerald-500 to-emerald-800 flex-wrap">
      <h1 className="text-4xl font-bold text-white">Currency Converter</h1>
      <div className="w-full">
                <div className="w-full max-w-md mx-auto rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFromCurrency(currency)}
                                selectedCurrency={fromCurrency}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setToCurrency(currency)}
                                selectedCurrency={toCurrency}
                                currencyDisabled={true}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()} 
                        </button>
                    </form>
                    
                </div>
      </div>

    </div>
  )
}

export default App
