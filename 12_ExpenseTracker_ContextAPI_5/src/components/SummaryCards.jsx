import React from 'react'
import { useExpense } from '../contexts'

function SummaryCards() {
  const { transactions } = useExpense();

  const metrics = transactions.reduce((acc, current) => {
    const amount = Number(current.amount) || 0;
    if (current.type === "Income") {
      acc.income += amount;
    } else {
      acc.expense += amount;
    }
    return acc;
  }, { income: 0, expense: 0 });

  const balance = metrics.income - metrics.expense;

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {/* Income Card */}
      <div className="relative group overflow-hidden rounded-2xl border border-emerald-500/10 bg-gradient-to-b from-emerald-500/[0.02] to-transparent p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-400">Total Income</p>
        <h2 className="text-3xl font-bold text-emerald-400 tracking-tight mt-2">
          ₹{metrics.income.toLocaleString('en-IN')}
        </h2>
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition duration-500" />
      </div>

      {/* Expense Card */}
      <div className="relative group overflow-hidden rounded-2xl border border-rose-500/10 bg-gradient-to-b from-rose-500/[0.02] to-transparent p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-400">Total Expenses</p>
        <h2 className="text-3xl font-bold text-rose-400 tracking-tight mt-2">
          ₹{metrics.expense.toLocaleString('en-IN')}
        </h2>
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-rose-500/5 rounded-full blur-xl group-hover:bg-rose-500/10 transition duration-500" />
      </div>

      {/* Balance Card */}
      <div className="relative group overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-500/[0.05] to-transparent p-6 shadow-md shadow-indigo-500/[0.02]">
        <p className="text-sm font-medium text-slate-400">Net Balance</p>
        <h2 className={`text-3xl font-bold tracking-tight mt-2 ${balance >= 0 ? 'text-indigo-400' : 'text-rose-400'}`}>
          {balance < 0 ? '-' : ''}₹{Math.abs(balance).toLocaleString('en-IN')}
        </h2>
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition duration-500" />
      </div>
    </div>
  )
}

export default SummaryCards;