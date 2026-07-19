import React, { useEffect, useState } from "react";
import { useExpense } from "../contexts";

function ExpenseItem({ transaction }) {
  const [isTransactionEditable, setIsTransactionEditable] = useState(false);

  const [transactionDescription, setTransactionDescription] = useState(
    transaction.description
  );

  const [transactionAmount, setTransactionAmount] = useState(
    transaction.amount
  );

  const { updateTransaction, deleteTransaction } = useExpense();

  useEffect(() => {
    setTransactionDescription(transaction.description);
    setTransactionAmount(transaction.amount);
  }, [transaction]);

  const editTransaction = () => {
    if (!transactionDescription.trim()) return;
    if (!transactionAmount) return;

    updateTransaction(transaction.id, {
      ...transaction,
      description: transactionDescription.trim(),
      amount: Number(transactionAmount),
    });

    setIsTransactionEditable(false);
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-5 flex justify-between items-center hover:shadow-lg transition">

      {/* Left Section */}
      <div className="flex-1">

        {isTransactionEditable ? (
          <input
            type="text"
            value={transactionDescription}
            onChange={(e) => setTransactionDescription(e.target.value)}
            className="w-full rounded-lg bg-slate-700 px-3 py-2 text-white outline-none border border-slate-600"
          />
        ) : (
          <h2 className="text-white text-lg font-semibold">
            {transaction.description}
          </h2>
        )}

        <p className="text-slate-400 text-sm mt-2">
          {transaction.category} • {transaction.type}
        </p>

        <p className="text-slate-500 text-xs mt-1">
          {transaction.timestamp.toLocaleString()}
        </p>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-6">

        {isTransactionEditable ? (
          <input
            type="number"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(Number(e.target.value))}
            className="w-28 rounded-lg bg-slate-700 px-3 py-2 text-white outline-none border border-slate-600 text-right"
          />
        ) : (
          <h2
            className={`text-xl font-bold ${
              transaction.type === "Expense"
                ? "text-rose-400"
                : "text-emerald-400"
            }`}
          >
            {transaction.type === "Expense" ? "- " : "+ "}₹
            {transaction.amount}
          </h2>
        )}

        {/* Edit / Save Button */}
        <button
          className="bg-slate-700 hover:bg-slate-600 w-10 h-10 rounded-xl transition"
          onClick={() => {
            if (isTransactionEditable) {
              editTransaction();
            } else {
              setIsTransactionEditable(true);
            }
          }}
        >
          {isTransactionEditable ? "💾" : "✏️"}
        </button>

        {/* Delete Button */}
        <button
          className="bg-rose-500 hover:bg-rose-600 w-10 h-10 rounded-xl transition"
          onClick={() => deleteTransaction(transaction.id)}
        >
          🗑
        </button>

      </div>

    </div>
  );
}

export default ExpenseItem;