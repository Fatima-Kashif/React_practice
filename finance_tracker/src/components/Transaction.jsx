import { useDispatch, useSelector } from "react-redux";
import { adddata, addTransaction } from "../redux/Slices/transactionSlice";
import { useState } from "react";

export default function AddTransaction() {
  const dispatch=useDispatch()
  const [amount,setAmount]=useState(0)
  const [category,setCategory]=useState('')
  const [desc,setDesc]=useState('')
  const [cashflowMethod,setCashflowMethod]=useState('income')
  const handleadd=()=>{
    dispatch(addTransaction({amount:amount,category:category,desc:desc,cashflow:cashflowMethod}))
    dispatch(adddata({amount:amount,category:category,cashflow:cashflowMethod}))
    setAmount(0)
    setCategory('')
    setDesc('')
    setCashflowMethod('income')
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Add Transaction</h2>
      <div className="flex gap-4">
        <button className={`flex-1 py-2 rounded ${cashflowMethod==='income'?'bg-green-100':'bg-gray-200'} cursor-pointer`} onClick={()=>setCashflowMethod('income')}>Income</button>
        <button className={`flex-1 py-2 rounded ${cashflowMethod==='expense'?'bg-green-100':'bg-gray-200'} cursor-pointer`} onClick={()=>setCashflowMethod('expense')}>Expense</button>
      </div>

      <div>
        <label className="text-sm">Category</label>

          {cashflowMethod==='income'? 
          <select className="w-full border p-2 rounded mt-1" value={category} onChange={(e)=>setCategory(e.target.value)} required>
          <option>Select Category</option>
          <option value="Rental income">Rental Income</option>
          <option value="Salary">Salary</option>
          <option value="Business">Business</option>
          <option value="Stock">Stock</option>
        </select>
        :<select className="w-full border p-2 rounded mt-1" value={category} onChange={(e)=>setCategory(e.target.value)} required>
          <option>Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Food">Food</option>
          <option value="Entertain">Entertain</option>
          <option value="Shopping">Shopping</option>
        </select>}
      </div>

      <div>
        <label className="text-sm">Amount</label>
        <input className="w-full border p-2 rounded mt-1" placeholder="$$$" value={amount} onChange={(e)=>setAmount(e.target.value)} required type="number" />
      </div>

      <div>
        <label className="text-sm">Description</label>
        <textarea className="w-full border p-2 rounded mt-1" placeholder="Enter a description..." value={desc} onChange={(e)=>setDesc(e.target.value)} required></textarea>
      </div>

      <button className="bg-yellow-400 py-2 rounded" onClick={handleadd}>Add Transaction</button>
    </div>
  );
}
