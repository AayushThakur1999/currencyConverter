const InputBox = () => {
  return (
    <div className="w-full max-h-min rounded-lg p-4 bg-white flex">
      <div className="w-1/2 flex flex-col justify-between gap-4">
        <label htmlFor="from">From</label>
        <input className="px-2 py-2 rounded-md bg-stone-200" type="number" id="from"/>
      </div>
      <div className="w-1/2 flex flex-col gap-4 justify-end text-right items-end">
        <p>Currency Type</p>
        <select className="bg-stone-200 px-3 py-2 w-fit rounded-lg">
          <option value="usd">usd</option>
        </select>
      </div>
    </div>
  )
}

export default InputBox