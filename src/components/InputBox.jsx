import React, {useId} from 'react'

function InputBox( {
    label, // passing from and to of the input box
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisable = false,
    currencyDisable = false,
    selectCurrency = "usd",// selecting default value
    currencyOptions = [], // having a list of options for selecting currency
    className = ""} ) {
    const amountInputId = useId()// creates a unique id for each and every tag whoch calls it

    return (
        <div className={`bg-white p-3 rounded-lg text-sm text-black flex ${ className }`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={( e ) => onAmountChange && onAmountChange( Number( e.target.value ) )}
                // converting value field to number as it returns string 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={( e ) => onCurrencyChange && onCurrencyChange( e.target.value )}
                    disabled={currencyDisable}
                // currencyChange already returns string so we dont need it to convert
                >

                    {currencyOptions.map( ( currency ) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ) )}
                    {/* Always use key for iterating in loops for good performance and if possible use id for key */}
                </select>
            </div>
        </div>
    );
}

export default InputBox