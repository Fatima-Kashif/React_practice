import { useId } from "react"
import countryList from "./code"
function InputBox({label,
    amount,
    input_disable,
    onchangeAmount,
    onchangeCurrency,
    currency}){
   
    const Id=useId()
    // this on chnage functions are important so we can tell the parent component that anoother option has been slected change the state noe usually states are in parent component
    // onChangeAmount iss liye chahiye hota hai takay input box parent ko bata sake ke “User ne nayi value likhi hai, ab apni state update karo.
    return(
        <>
        <div className=" bg-amber-50 rounded-md p-10 mb-2">
            <div className="flex justify-between text-gray-500">
                <div className="flex flex-col gap-5 ">
                <label htmlFor={Id}>{label}</label>
                <input 
                id={Id}
                type="number" 
                value={amount} 
                disabled={input_disable} 
                className="p-2 border-none bg-orange-100 w-[300px] rounded-md" 
                onChange={
                    (e)=>onchangeAmount && onchangeAmount(e.target.value)} 
                    />
                    </div>
                    <div className="flex flex-col gap-5">
                <label htmlFor="">Currency Type</label>
                <select className="bg-orange-100 p-2 rounded-md" name="countrycode" value={currency} onChange={(e)=> onchangeCurrency && onchangeCurrency(e.target.value)}>
                    {/* You can’t use a for loop inside JSX */}
                    {/* so use map instead for loop */}
                    {/* we can't run map on an object directly first we have to gather keys then run map on it */}
                    {Object.keys(countryList).map(code=>(
                        <option  key={code} value={code}>{code}</option>
                    ))}
                </select>
                </div>
                

            </div>

        </div>

        </>
    )
}
export default InputBox;