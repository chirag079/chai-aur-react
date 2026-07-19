import React from 'react'

function SummaryCards() {
    return (
        <div className="grid md:grid-cols-3 gap-5">

            <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
                <p className="text-slate-400">Income</p>

                <h2 className="text-3xl font-bold text-emerald-400 mt-2">
                    ₹25,000
                </h2>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
                <p className="text-slate-400">Expense</p>

                <h2 className="text-3xl font-bold text-rose-400 mt-2">
                    ₹8,400
                </h2>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
                <p className="text-slate-400">Balance</p>

                <h2 className="text-3xl font-bold text-indigo-400 mt-2">
                    ₹16,600
                </h2>
            </div>

        </div>
    )
}

export default SummaryCards