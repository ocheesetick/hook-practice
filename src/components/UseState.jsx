import { React, useState } from 'react'

const UseState = () => {

  // To change the state inside the component only
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 grid grid-cols-2 gap-2">
      <h1 className='text-white font-medium col-span-2'>useState Counter: {count}</h1>

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