import BalanceCard from "./components/BalanceSummary";
import AddTransaction from "./components/Transaction";
import TransactionSummary from "./components/TransactionHistory";
import {useSelector} from 'react-redux'


export default function App() {
  const transactions=useSelector(state=>state.transactionHistory)//using inside the function is valid
  return (
    <main className="px-10 bg-gray-100 min-h-screen flex flex-col gap-6 py-5">
      <BalanceCard balance={transactions.balance} income={transactions.income} expense={transactions.expense}/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AddTransaction />
        <div className="md:col-span-2">
          <TransactionSummary summary={transactions.transactions} incomedata={transactions.incomeData} expensedata={transactions.expenseData}/>
        </div>
      </div>
    </main>
  );
}
