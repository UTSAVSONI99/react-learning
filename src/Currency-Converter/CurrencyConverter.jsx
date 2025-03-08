import React from "react";
import "./CurrencyConverter.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function CurrencyConverter() {
  const [exchangeRate, setExchangeRate] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  useEffect(() => {
    const apiURL = `https://v6.exchangerate-api.com/v6/eba65d84e054939109983776/latest/${fromCurrency}`;
    axios
      .get(apiURL)
      .then((response) => {
        setExchangeRate(response.data.conversion_rates);
      })
      .catch((error) => {
        console.error("Error fetching exchange rates:", error);
      });
  }, [fromCurrency]);

  useEffect(() => {
    const conversionRate = exchangeRate[toCurrency];

    if (conversionRate) {
      const converted = amount * conversionRate;
      setConvertedAmount(converted.toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, exchangeRate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "amount":
        setAmount(value);
        break;

      case "fromCurrency":
        setFromCurrency(value);
        break;

      case "toCurrency":
        setToCurrency(value);
        break;
    }
  };

  return (
    <div className="card">
      <img
        src="/exchange.gif"
        style={{ backgroundColor: "#ffffff" }}
        width="80"
        alt="test"
      />
      {/* wrapper */}
      <h1>Currency Converter</h1>
      <div className="currency_exchange">
        <div className="input_container">
          <label className="input_label">Amount:</label>
          <input
            type="number"
            name="amount"
            className="input_field"
            value={amount}
            onChange={handleChange}
          />
        </div>

        <div className="input_container">
          <label className="input_label">From Currency:</label>
          <select
            name="fromCurrency"
            onChange={handleChange}
            value={fromCurrency}
            className="input_field"
          >
            {Object.keys(exchangeRate).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="input_container">
          <label className="input_label">To Currency:</label>
          <select
            name="toCurrency"
            onChange={handleChange}
            value={toCurrency}
            className="input_field"
          >
            {Object.keys(exchangeRate).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* output */}
      <div className="output">
        <h2>converted Amount:{convertedAmount}</h2>
      </div>
    </div>
  );
}

export default CurrencyConverter;
