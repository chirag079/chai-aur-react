import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-wrap h-screen w-full items-center justify-center bg-emerald-600">
      <h1 className="text-emerald-800 text-4xl font-mono font-stretch-50%">Hello React</h1>
    </div>
  )
}

export default App
