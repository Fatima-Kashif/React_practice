
import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyConvert from './hooks/conversion';
function App() {
 let [amount,setAmount]=useState(0)
 let [convertedAmount,setConvertedAmount]=useState(0)
 let [fromcurr,setFromcurr]=useState('USD')
 let [tocurr,setTocurr]=useState('PKR')

 function swap(){
  setFromcurr(tocurr)
  setTocurr(fromcurr)
  setAmount(convertedAmount)
  setConvertedAmount(amount)
 }
 async function convert(){
 const convert_curr= await useCurrencyConvert(fromcurr,tocurr); //because useCurrencyConvert is an async function it will return a promise there must be await in this to get the result
 setConvertedAmount((convert_curr*amount).toFixed(2))
}
  return (
    <>
    <div className=' bg-orange-100 flex justify-center items-center h-screen'>
      <div className='w-[600px] relative'>   
     <InputBox label='From' input_disable={false} onchangeAmount={setAmount} onchangeCurrency={setFromcurr} currency={fromcurr} amount={amount}/>
     <InputBox label='To' input_disable={true} onchangeAmount={setConvertedAmount} onchangeCurrency={setTocurr} currency={tocurr} amount={convertedAmount}/>
     <button className='bg-amber-500 p-3 pl-5 pr-5 rounded-md absolute cursor-pointer left-1/2 bottom-1/2 transform-translate-y-1/2 -translate-x-1/2 z-10' onClick={swap}>swap</button>
     <button className='bg-amber-500 p-3 rounded-md w-full mt-2 cursor-pointer' type='submit' onClick={(e)=>{e.preventDefault(); convert()}}>Convert</button>
     </div>
     </div>
    </>
  )
}

export default App
