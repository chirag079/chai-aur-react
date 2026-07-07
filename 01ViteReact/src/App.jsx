import {useState} from 'react'

function App() {
  let [counter, setCounter] = useState(0); // useState Hook

  function incVal(){
    
    if(counter <20)
    {
      setCounter(counter + 1); 
    }
    else setCounter(0); 
  }

  let decVal = ()=>{
    if(counter > 0)
    {
       setCounter(counter - 1);
    }
    else setCounter(20);
  }

  return (
    <div>
      <button onClick={incVal}>Increase Value: {counter}</button> 
      <br/>
      <br/>
      <button onClick={decVal}>Decrease Value: {counter}</button>
    </div>
  )
}

export default App
