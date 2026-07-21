import React from 'react'

function FilterBar({ searchQuery, setSearchQuery, filterType, setFilterType }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <svg className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search descriptions or tags..."
          className="w-full text-sm rounded-xl bg-slate-900/40 border border-white/5 pl-10 pr-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500/30 transition duration-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <select
        className="text-sm rounded-xl bg-slate-900/40 border border-white/5 px-4 py-3 text-slate-300 outline-none focus:border-indigo-500/30 transition duration-200"
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="All">All Flows</option>
        <option value="Income">Income Only</option>
        <option value="Expense">Expenses Only</option>
      </select>
    </div>
  )
}

export default FilterBar;