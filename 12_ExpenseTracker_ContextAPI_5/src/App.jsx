import { useEffect, useState } from 'react'
import SummaryCards from './components/SummaryCards'
import ExpenseForm from './components/ExpenseForm'
import FilterBar from './components/FilterBar'
import Navbar from './components/Navbar'
import ExpenseItem from './components/ExpenseItem'
import { ExpenseContextProvider } from './contexts'


function App() {

  const [transactions, setTransactions] = useState([]);

  function addTransaction (transaction)
  {
    setTransactions((prev)=>{
      return [transaction, ...prev];
    })
    
  }
  function updateTransaction (id, transaction)
  {
    setTransactions((prev)=>{
      return prev.map((currTransaction)=>{
        return currTransaction.id===id?transaction:currTransaction;
      })
    })
    
  }
  function deleteTransaction (id)
  {
    setTransactions((prev)=> (prev.filter((currTransaction) => currTransaction.id!==id)))
  }

  useEffect(()=>{
    const storedTransactions=JSON.parse(localStorage.getItem("transactions"));

    if(storedTransactions && storedTransactions.length>0) setTransactions(storedTransactions);
  }, [])

  useEffect(()=>{
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions])
  

  return (
    <ExpenseContextProvider value={{transactions, addTransaction, updateTransaction, deleteTransaction}}>
      <div className="min-h-screen bg-slate-950">

          <Navbar />

          <div className="max-w-6xl mx-auto p-6 space-y-8">

              <SummaryCards />

              <ExpenseForm />

              <FilterBar />

              <div className="space-y-4">

                  {/* ExpenseItem */}
                  {transactions.map((transaction)=> (
                    <ExpenseItem transaction={transaction}/>
                  ))}

                  {/* ExpenseItem */}

                  {/* ExpenseItem */}

              </div>

          </div>

      </div>
    </ExpenseContextProvider>
  )
}

export default App
