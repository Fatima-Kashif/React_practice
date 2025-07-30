export default function BalanceCard({balance,income,expense}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-slate-700 text-white p-6 rounded-lg">
        <p className="text-sm">Available balance</p>
        <h1 className={`text-3xl font-bold ${balance>=0?'text-[#5AB064]':'text-[#B05A5A]'}`}>${balance}</h1>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 bg-[#D9E7E5] p-6 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">${income}</p>
            <p>Income</p>
            </div>
            <div className="bg-[#42887C] p-3 rounded-3xl">
          <img src="income.svg" alt="income" />
          </div>
        </div>
        <div className="flex-1 bg-[#E6E2E6] p-6 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">${expense} </p>
            <p>Expense</p>
          </div>
            <div className="bg-[#836F81] p-3 rounded-3xl">
          <img src="expense.svg" alt="expense" />
            </div>
        </div>
      </div>
    </div>
  );
}
