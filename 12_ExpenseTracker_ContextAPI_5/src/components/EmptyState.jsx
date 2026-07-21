import React from 'react'

function EmptyState() {
  return (
    <div className="border border-dashed border-white/10 bg-slate-900/10 rounded-2xl py-12 px-4 text-center max-w-xl mx-auto flex flex-col items-center justify-center">
      <div className="p-4 bg-slate-900/60 border border-white/5 rounded-2xl text-slate-400 shadow-inner mb-4">
        <svg className="w-8 h-8 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125V18M3.75 18v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125V9.75M3.75 9.75a3.001 3.001 0 00-3 3v3a3.001 3.001 0 003 3m16.5-9a3.001 3.001 0 013 3v3a3.001 3.001 0 01-3 3M3.75 9.75h16.5M5.625 9.75h12.75M5.625 18.75h12.75" />
        </svg>
      </div>
      <h3 className="text-slate-200 text-base font-medium tracking-wide">
        No ledger history detected
      </h3>
      <p className="text-slate-500 text-xs max-w-xs mt-1">
        Your current transactional viewport is empty. Log a new incoming cash flow or asset debit using the lateral menu to begin.
      </p>
    </div>
  )
}

export default EmptyState;