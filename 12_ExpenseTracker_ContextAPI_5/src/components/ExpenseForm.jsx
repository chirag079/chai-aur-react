import React, { useState } from 'react'
import { useExpense } from '../contexts';

function ExpenseForm() {
    const [description, setDescription] = useState("");
    const [amount, setAmount]= useState(0);
    const [type, setType] = useState("Expense");
    const [category, setCategory] = useState("Food");

    const {addTransaction} = useExpense();

    const add = (e) =>{
        e.preventDefault();

        if(!description.trim()) return;
        if(!amount) return;
        if(!type.trim()) return;
        if(!category.trim()) return;

        addTransaction(
            {
                id:Date.now(),
                description:description.trim(),
                amount:amount,
                type:type,
                category:category,
                timestamp:new Date().toLocaleDateString(),
            }
        )

        setDescription("");
        setAmount(0);
        setType("Expense");
        setCategory("Food");

    }

    return (

        <form onSubmit={add} className="bg-slate-800 rounded-2xl p-6 space-y-5 shadow-lg">

            <h2 className="text-xl font-semibold text-white">
                Add Transaction
            </h2>

            <input
                type="text"
                placeholder="Description"
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white outline-none focus:border-indigo-500"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            />

            <div className="grid md:grid-cols-2 gap-4">

                <input
                    type="number"
                    placeholder="Amount"
                    className="rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white outline-none focus:border-indigo-500"
                    value={amount}
                    onChange={(e)=>setAmount(Number(e.target.value))}
                />

                <select
                    className="rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white outline-none focus:border-indigo-500"
                    value={type}
                    onChange={(e)=>setType(e.target.value)}
                >
                    <option>Expense</option>
                    <option>Income</option>
                </select>

            </div>

            <select
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white outline-none focus:border-indigo-500"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
            >
                <option>Food</option>
                <option>Shopping</option>
                <option>Travel</option>
                <option>Bills</option>
                <option>Salary</option>
                <option>Others</option>
            </select>

            <button
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:scale-[1.02] transition"
            >
                Add Transaction
            </button>

        </form>

    )
}

export default ExpenseForm