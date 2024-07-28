import InputBox from "./components/InputBox"


function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[url('https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg')] bg-cover">
      <div className="max-w-lg w-full p-8 bg-blue-300 bg-opacity-25 flex flex-col gap-4 justify-center items-center rounded-lg relative">
        <InputBox />
        <button className="w-fit bg-blue-500 hover:bg-blue-700 text-yellow-50 rounded-md px-2 py-1 border-2 border-white absolute left-1/2 -translate-x-1/2 -translate-y-7">
        swap
        </button>
        <InputBox />
        <button className="w-full p-2 bg-blue-500 hover:bg-blue-600 rounded-md text-yellow-50">
          Convert USD to INR
        </button>
      </div>
    </div>
  )
}

export default App
