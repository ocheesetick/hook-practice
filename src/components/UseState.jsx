import { React, useState } from 'react'

const UseState = () => {

  // To change the state inside the component only
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 grid grid-col-1 gap-3">
      <span className='text-white font-bold col-span-1 border-solid border-2 border-yellow-400 rounded-lg p-2'>UseState</span>
      <span className='text-white font-medium col-span-1'>Count: {count}</span>

      {/* Add 1 from count */}
      <button 
        className='p-4 font-bold bg-yellow-400 rounded-lg'
        onClick={() => setCount(count+1)}
      >
        +
      </button>

      {/* Subtract 1 from count */}
      <button 
        className='p-4 font-bold bg-yellow-400 rounded-lg'
        onClick={() => setCount(count-1)}
      >
        -
      </button>
    </div>
  )
}

export default UseState