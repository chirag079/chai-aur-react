import React from 'react'

function EmptyState() {

    return (

        <div className="bg-slate-800 rounded-2xl py-16 text-center">

            <div className="text-6xl">
                💸
            </div>

            <h2 className="text-white text-2xl font-bold mt-5">
                No Transactions Yet
            </h2>

            <p className="text-slate-400 mt-2">
                Start by adding your first income or expense.
            </p>

        </div>

    )

}

export default EmptyState