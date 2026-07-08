import React from 'react'

function Capusle({bg, onClick}) {
    let colorName=bg.split('-')[1];
  return (
    <button className={`flex flex-wrap p-2 w-18 h-12 justify-center items-center rounded-full ${bg} text-white`} onClick={onClick}>
      {colorName}
    </button>
  )
}

export default Capusle