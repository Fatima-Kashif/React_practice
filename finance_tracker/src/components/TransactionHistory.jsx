import { useDispatch } from "react-redux";
import {Chart} from 'react-google-charts'
import { deleteTransaction } from "../redux/Slices/transactionSlice";

export default function TransactionSummary({summary,incomedata,expensedata}) {
const incomeOptions={
  pieHole:0.6,
  colors:['#FFA84A','#FB67CA','#9B88ED','#04BFDA']
}
const expenseOptions={
  pieHole:0.6,
  colors:['#FFA84A','#FB67CA','#9B88ED','#04BFDA']
}
  const dispatch= useDispatch()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md h-[70vh] overflow-y-scroll">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        {summary.filter(item => item.amount !== 0).length===0?
        <div className="flex items-center justify-center"><p>No transactions yet</p></div>
        :
        <div className="flex flex-col gap-4 ">
            {summary
            .filter(item => item.amount !== 0) // to eliminate the dummy transaction data
            .map((item)=>
          <div key={item.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <h3 className="font-bold">{item.category}</h3>
              <p className="text-2xl font-bold">${item.amount}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
            <div className="flex flex-col items-center justify-center ">
            <button className="cursor-pointer" onClick={()=>dispatch(deleteTransaction(item.id))}><img src="Bin.svg" alt="delete" className="mb-3"/></button>
            <span className={`${item.cashflowMethod==='income'?"text-green-500":"text-red-500"}`}>{item.cashflowMethod}</span>
            </div>
          </div>
           )}
        </div>
        }
      </div>

      <div className="bg-white px-6 py-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Financial Summary</h2>
        <div className="flex flex-col gap-4">
          <div> 
            <h3 className="font-semibold">Income</h3>
            <div>
               <Chart
        chartType="PieChart"
        width="100%"
        height="180px"
        data={incomedata}
        options={incomeOptions}
      />
            </div>
          </div >
          <div>
            <h3 className="font-semibold">Expense</h3>
            <div>
               <Chart
        chartType="PieChart"
        width="100%"
        height="180px"
        data={expensedata}
        options={expenseOptions}
      />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
