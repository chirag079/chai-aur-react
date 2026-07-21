import { useEffect, useState } from 'react'
import SummaryCards from './components/SummaryCards'
import ExpenseForm from './components/ExpenseForm'
import FilterBar from './components/FilterBar'
import Navbar from './components/Navbar'
import ExpenseItem from './components/ExpenseItem'
import EmptyState from './components/EmptyState'
import { ExpenseContextProvider } from './contexts'

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");

  function addTransaction(transaction) {
    setTransactions((prev) => [transaction, ...prev]);
  }

  function updateTransaction(id, transaction) {
    setTransactions((prev) =>
      prev.map((currTransaction) =>
        currTransaction.id === id ? transaction : currTransaction
      )
    );
  }

  function deleteTransaction(id) {
    setTransactions((prev) => prev.filter((currTransaction) => currTransaction.id !== id));
  }

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions && storedTransactions.length > 0) setTransactions(storedTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Handle Filtering & Searching logic here so it syncs cleanly across components
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "All" || t.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <ExpenseContextProvider value={{ transactions, addTransaction, updateTransaction, deleteTransaction }}>
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 font-sans antialiased">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
          <SummaryCards />
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 sticky top-24">
              <ExpenseForm />
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <FilterBar 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
                filterType={filterType} 
                setFilterType={setFilterType} 
              />
              
              <div className="space-y-3">
                {filteredTransactions.length === 0 ? (
                  <EmptyState />
                ) : (
                  filteredTransactions.map((transaction) => (
                    <ExpenseItem key={transaction.id} transaction={transaction} />
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ExpenseContextProvider>
  )
}

export default App;