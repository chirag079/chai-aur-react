import React from 'react'

function Navbar() {
    return (
        <nav className="bg-slate-900 border-b border-slate-700">
            <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

                <h1 className="text-3xl font-bold text-white">
                    💰 Expense Tracker
                </h1>

                <div className="text-slate-400 text-sm">
                    Manage your money smarter
                </div>

            </div>
        </nav>
    )
}

export default Navbar