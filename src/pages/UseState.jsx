import { React, useState } from 'react'

const UseState = () => {
  const [count, setCount] = useState()
  return (
    <div className="bg-slate-900 p-4">
      <button className='p-4 bg-slate-500'>Counter:</button>
    </div>
  )
}

export default UseState