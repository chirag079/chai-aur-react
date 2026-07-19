import React from 'react'

function FilterBar() {
    return (

        <div className="flex flex-col md:flex-row gap-4">

            <input
                type="text"
                placeholder="🔍 Search..."
                className="flex-1 rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none"
            />

            <select
                className="rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
            >
                <option>All</option>
                <option>Income</option>
                <option>Expense</option>
            </select>

        </div>

    )
}

export default FilterBar