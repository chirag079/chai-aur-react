import {useState} from 'react'

function App() {
  let [counter, setCounter] = useState(0); // useState Hook

  function incVal(){
    // counter++;
    // document.querySelector('button').innerHTML = `Increase Value: ${counter}`;
    // // I have to select all spots wherever counter has been used to reflect them on UI via Vanilla JS. But React has a better way to do this via State Management => useState Hook
    // console.log(counter);

    setCounter(counter + 1); // setCounter is a function which will update the value of counter and also reflect it on UI wherever it has been used.
  }

  let decVal = ()=>{
    setCounter(counter - 1); // setCounter is a function which will update the value of counter and also reflect it on UI wherever it has been used.
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
