import { useId } from "react"

interface InputBoxProps {
  label: string;
  amount: number;
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
  currencyOptions?: string[];
  selectCurrency?: string;
  amountDisable?: boolean;
}

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false
}: InputBoxProps) => {
  const amountInputId = useId()
  return (
    <div className="w-full max-h-min rounded-lg p-4 bg-white flex">
      <div className="w-1/2 flex flex-col justify-between gap-4">
        <label htmlFor={amountInputId}>{label}</label>
        <input
          className="px-2 py-2 rounded-md bg-stone-200 uppercase"
          type="number"
          placeholder="amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          id={amountInputId}
        />
      </div>
      <div className="w-1/2 flex flex-col gap-4 justify-end text-right items-end">
        <p>Currency Type</p>
        <select
          className="bg-stone-200 px-3 py-2 w-fit rounded-lg uppercase"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox