import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  let incFunc = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  let decFunc = () => {
    setCount(count - 1)
  }

  return (
    <div className='flex flex-row gap-4 items-center justify-center h-screen'>
     <button onClick={incFunc} className='p-4 bg-emerald-600 text-white w-40'>Inc Value: {count}</button>
     <button onClick={decFunc} className='p-4 bg-rose-600 text-white w-40'>Dec Value: {count}</button>
    </div>
  )
}

export default App
