function InputBox({
  label,
  amount = 0,
  onCurrencyChange,
  currency = "usd",
  onAmountChange,
  currencies = [],
  amountDisabled = false,
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor="fromAmount"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="flex mt-1">
        <input
          id="fromAmount"
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
          className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          id="fromCurrency"
          value={currency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="p-2 border rounded-r-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {currencies.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default InputBox;
