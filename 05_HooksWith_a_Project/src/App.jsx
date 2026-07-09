import { useState, useCallback, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const[isNumber, setIsNumber]=useState(false)
  const[isCharacter, setIsCharacter]=useState(false)

  const passwordGenerator=useCallback(()=>{
    let pass="";
    // only alphabets
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for(let i=1; i<=length; i++)
    {
      if(isNumber) str+="0123456789";
      if(isCharacter) str+="!@#$%^&*()_+";
      let charIndex=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, isNumber, isCharacter, setPassword]);

  useEffect(()=>{
    passwordGenerator();
  }, [length, isNumber, isCharacter, passwordGenerator]);

  let passwordRef=useRef(null);
  const copyToClipboard=()=>{
    passwordRef?.current.select();
    navigator.clipboard.writeText(password);
    toast.success("Password copied to clipboard!");
  }

  return (
    <div className="h-screen w-full bg-emerald-700 items-center justify-center flex flex-wrap">
      <div className="flex flex-col h-auto w-auto p-8 bg-[#29B657] rounded-xl shadow-lg">
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex flex-row gap-4 justify-center">
            <input type="text" className="p-5 rounded-lg text-gray-800 bg-white w-full" placeholder={password} readOnly ref={passwordRef} />
            <button className="p-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={copyToClipboard}>Copy</button>
          </div>
          <div>
            <input type="range" min="8" max="25" value={length} onChange={(e) => setLength(e.target.value)} />
            <label className="text-white text-lg font-semibold ml-4">Length: {length}</label>

            <input type="checkbox" defaultChecked={false} className="ml-4" onChange={(e) => setIsNumber(e.target.checked)} />
            <label className="text-white text-lg font-semibold ml-2">Numbers</label>

            <input type="checkbox" defaultChecked={false} className="ml-4" onChange={(e) => setIsCharacter(e.target.checked)}/>
            <label className="text-white text-lg font-semibold ml-2">Characters</label>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} />
    </div>
  )
}

export default App
