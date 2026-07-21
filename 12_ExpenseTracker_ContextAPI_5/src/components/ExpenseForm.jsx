import React, { useState } from 'react'
import { useExpense } from '../contexts';

function ExpenseForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [category, setCategory] = useState("Food");

  const { addTransaction } = useExpense();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount || Number(amount) <= 0) return;

    addTransaction({
      id: Date.now(),
      description: description.trim(),
      amount: Number(amount),
      type,
      category,
      timestamp: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
    });

    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-5 space-y-4 shadow-xl">
      <h2 className="text-md font-semibold text-slate-200 tracking-wide">
        New Transaction
      </h2>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="What was this for?"
          className="w-full text-sm rounded-xl bg-slate-950/60 border border-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition duration-200"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="Amount (₹)"
            className="w-full text-sm rounded-xl bg-slate-950/60 border border-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition duration-200"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            required
          />

          <select
            className="text-sm rounded-xl bg-slate-950/60 border border-white/5 px-3 py-3 text-slate-300 outline-none focus:border-indigo-500/50 transition duration-200"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
        </div>

        <select
          className="w-full text-sm rounded-xl bg-slate-950/60 border border-white/5 px-4 py-3 text-slate-300 outline-none focus:border-indigo-500/50 transition duration-200"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Shopping</option>
          <option>Travel</option>
          <option>Bills</option>
          <option>Salary</option>
          <option>Others</option>
        </select>
      </div>

      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-medium text-sm hover:opacity-95 shadow-md shadow-indigo-500/10 hover:scale-[1.01] active:scale-[0.99] transition duration-200">
        Add Entry
      </button>
    </form>
  )
}

export default ExpenseForm;