import React, { useEffect, useState } from "react";
import { useExpense } from "../contexts";

function ExpenseItem({ transaction }) {
  const [isEditable, setIsEditable] = useState(false);
  const [desc, setDesc] = useState(transaction.description);
  const [amt, setAmt] = useState(transaction.amount);

  const { updateTransaction, deleteTransaction } = useExpense();

  useEffect(() => {
    setDesc(transaction.description);
    setAmt(transaction.amount);
  }, [transaction]);

  const handleSave = () => {
    if (!desc.trim() || !amt || Number(amt) <= 0) return;
    updateTransaction(transaction.id, {
      ...transaction,
      description: desc.trim(),
      amount: Number(amt),
    });
    setIsEditable(false);
  };

  return (
    <div className="group border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center transition duration-200 hover:bg-slate-900/60 hover:border-white/10">
      
      {/* Left Data Presentation */}
      <div className="flex-1 space-y-1">
        {isEditable ? (
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full max-w-xs text-sm rounded-lg bg-slate-950 border border-white/10 px-3 py-1.5 text-white outline-none focus:border-indigo-500"
          />
        ) : (
          <h3 className="text-slate-200 text-sm font-medium tracking-wide">
            {transaction.description}
          </h3>
        )}

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
            {transaction.category}
          </span>
          <span>•</span>
          <span>{transaction.timestamp}</span>
        </div>
      </div>

      {/* Right Side Control Panel */}
      <div className="flex items-center gap-3 ml-4">
        {isEditable ? (
          <input
            type="number"
            value={amt}
            onChange={(e) => setAmt(e.target.value)}
            className="w-24 text-sm rounded-lg bg-slate-950 border border-white/10 px-3 py-1.5 text-white outline-none focus:border-indigo-500 text-right"
          />
        ) : (
          <span className={`text-md font-semibold tracking-tight ${transaction.type === "Expense" ? "text-rose-400" : "text-emerald-400"}`}>
            {transaction.type === "Expense" ? "- " : "+ "}₹{transaction.amount.toLocaleString('en-IN')}
          </span>
        )}

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => isEditable ? handleSave() : setIsEditable(true)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-400 hover:text-white transition duration-200"
            aria-label="Edit node"
          >
            {isEditable ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            )}
          </button>

          <button
            onClick={() => deleteTransaction(transaction.id)}
            className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500 border border-rose-500/20 text-rose-400 hover:text-white transition duration-200"
            aria-label="Delete node"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          </button>
        </div>
      </div>

    </div>
  );
}

export default ExpenseItem;