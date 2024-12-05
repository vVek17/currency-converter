import InputBox from "./components/InputBox";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          <InputBox label="From" />
          <Button
            lable="swap"
            className="px-4 py-1 text-white bg-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <InputBox label="To" />
          <Button
            lable="Convert"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
