import { useState } from 'react'
import ColorBar from './Components/colorBar'
import Capusle from './Components/Capusle'

//use ColorBar component to only implement change the background color of the page when a color capsule is clicked. The background color should be changed to the color of the clicked capsule.
function App() {
  const [bgColor, setBgColor] = useState('olive')

  return (
    <div className="w-full h-screen" style={{ backgroundColor: bgColor }}>
      <div className="flex flex-wrap fixed bottom-12 justify-center gap-4 w-full">
        <div className="flex flex-row flex-wrap gap-4 bg-white w-auto p-6 rounded-3xl">
          <Capusle bg="bg-red-500" onClick={() => setBgColor('red')} />
          <Capusle bg="bg-blue-500" onClick={() => setBgColor('blue')} />
          <Capusle bg="bg-green-500" onClick={() => setBgColor('green')} />
          <Capusle bg="bg-yellow-500" onClick={() => setBgColor('yellow')} />
          {/* pastle colors */}
          <Capusle bg="bg-pink-500" onClick={() => setBgColor('pink')} />
          <Capusle bg="bg-purple-500" onClick={() => setBgColor('purple')} />
          <Capusle bg="bg-indigo-500" onClick={() => setBgColor('indigo')} />
          <Capusle bg="bg-gray-500" onClick={() => setBgColor('gray')} />
        </div>
      </div>
    </div>
  )
}

export default App
