import React, { useState, useEffect } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const ConvertCurrency = () => {
  const [usdtAmount, setUsdtAmount] = useState();
  const [btcAmount, setBtcAmount] = useState();
  const [selectedUsdtCurrency, setSelectedUsdtCurrency] = useState("USDT");
  const [selectedBtcCurrency, setSelectedBtcCurrency] = useState("BTC");
  const [exchangeRates, setExchangeRates] = useState(null);

  const currencies = ["USDT", "BTC", "ETH", "SOL"];

  useEffect(() => {
    const mockExchangeRates = {
      USDT: {
        BTC: 0.000038,
        ETH: 0.00061,
        SOL: 0.05,
      },
      BTC: {
        USDT: 26542.42,
        ETH: 16.22,
        SOL: 1382.4,
      },
      ETH: {
        USDT: 1636.48,
        BTC: 0.06,
        SOL: 85.25,
      },
      SOL: {
        USDT: 19.2,
        BTC: 0.00072,
        ETH: 0.01,
      },
    };
    setExchangeRates(mockExchangeRates);
  }, []);

  const getAvailableCurrencies = (selectedCurrency) => {
    return currencies.filter((currency) => currency !== selectedCurrency);
  };

  const handleAmountChange = (event, currency) => {
    const newAmount = parseFloat(event.target.value);
    if (currency === "USDT") {
      setUsdtAmount(newAmount);
    } else if (currency === "BTC") {
      setBtcAmount(newAmount);
    }
  };

  const handleConvertClick = () => {
    if (exchangeRates) {
      const rate = exchangeRates[selectedUsdtCurrency][selectedBtcCurrency];
      setBtcAmount((usdtAmount * rate).toFixed(6));
    }
  };

  return (
    <div className="w-4/12 bg-white dark:bg-[#1C1C25] py-5 px-4 rounded-xl">
      <div className="flex justify-between mb-5">
        <h4 className="text-base lg:text-xl 2xl:text-2xl font-bold">Convert</h4>

        <button className="border dark:border-[#ffffff0c] dark:text-[#999999] text-[#CCD0D7] font-bold px-3 py-1 rounded-lg hover:bg-[#87b9ff4b] hover:text-blue-400 transition-all">
          <PiDotsThreeOutlineFill
            className="self-center"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      </div>

      <div className="mb-4 relative">
        <input
          type="number"
          value={usdtAmount}
          onChange={(e) => handleAmountChange(e, "USDT")}
          className="w-full px-3 py-4 border dark:border-[#ffffff0c] rounded-md bg-[#F9F9FA] dark:bg-[#121212] dark:text-[#626D7D] font-semibold outline-none"
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <select
            value={selectedUsdtCurrency}
            onChange={(e) => setSelectedUsdtCurrency(e.target.value)}
            className="px-2 border-none outline-none py-2 border rounded-md text-[#219653] bg-[#D3EADD]"
          >
            {getAvailableCurrencies(selectedBtcCurrency).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4 relative">
        <input
          type="number"
          value={btcAmount}
          onChange={(e) => handleAmountChange(e, "BTC")}
          className="w-full px-3 py-4 border dark:border-[#ffffff0c] rounded-md bg-[#F9F9FA] dark:bg-[#121212] dark:text-[#626D7D] font-semibold outline-none"
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <select
            value={selectedBtcCurrency}
            onChange={(e) => setSelectedBtcCurrency(e.target.value)}
            className="px-2 border-none outline-none py-2 border rounded-md text-[#F2994A] bg-[#FCF4DB]"
          >
            {getAvailableCurrencies(selectedUsdtCurrency).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleConvertClick}
        className="px-4 py-4 w-full font-bold bg-blue-500 text-white dark:text-black rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Convert Now
      </button>

      <p className="text-xs text-[#626D7D] pt-3 ">
        The ultimate price and output is determined by the amount of tokens in
        the pool at the time of your swap.
      </p>
    </div>
  );
};

export default ConvertCurrency;
