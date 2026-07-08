import React from 'react'

// implement a color bar with 4 color capsules (red, blue, green, yellow) using tailwind css. When a color capsule is clicked, the background color of the page should change to that color.
function ColorBar() {
  const colors = ['red', 'blue', 'green', 'yellow']

  const handleColorClick = (color) => {
    document.body.style.backgroundColor = color
  }

  return (
    <div className='flex flex-row gap-4 items-center justify-center h-screen'>
      {colors.map((color) => (
        <div
          key={color}
          className={`w-20 h-20 rounded-full bg-${color}-500 cursor-pointer`}
          onClick={() => handleColorClick(color)}
        ></div>
      ))}
    </div>
  )
}

export default ColorBar