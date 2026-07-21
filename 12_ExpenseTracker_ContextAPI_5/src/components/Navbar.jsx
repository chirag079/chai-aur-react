import React from 'react'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-xl shadow-lg shadow-indigo-500/20">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-1.958-.659-1.071-.927-1.071-2.43 0-3.358 1.072-.927 2.812-.927 3.883 0l.317.274M12 3v3m0 12v3" />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Capitall
          </h1>
        </div>
        <div className="text-xs font-medium text-slate-500 tracking-wider uppercase bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
          Dashboard
        </div>
      </div>
    </nav>
  )
}

export default Navbar;