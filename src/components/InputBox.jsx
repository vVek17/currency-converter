function InputBox({ label = "null" }) {
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
  );
}
export default InputBox;
