import { React, useState, useMemo } from 'react'
import { initialItems } from './utils'

const UseMemo = () => {
    
    const [count, setCount] = useState(0)
    const [items] = useState(initialItems)

    // const selectedItem = items.find((item) => item.isSelected) // initial code

    /*
        const selectedItem = useMemo(() => 
            items.find((item) => item.isSelected)
     , [items]) // dependency array which controlls when this should be re-computed
    */

    const selectedItem = useMemo(() => 
        items.find((item) => item.id === count)
    , [count, items]) 

    return (
        <div className='p-4 grid grid-cols-1 gap-2'>
            <div className="text-white font-bold col-span-1 border-solid border-2 border-lime-400 rounded-lg p-2">UseMemo</div>
            <span className="text-white font-medium col-span-1">Count: {count}</span>
            <span className="text-white font-medium col-span-1">Selected Item: {selectedItem?.id}</span>
            <button
                className='p-4 font-bold bg-lime-400 rounded-lg col-span-1'
                onClick={() => setCount(count+1) }>
                Increment
            </button>
        </div>
    )
}

export default UseMemo

/*
    NOTE:
    - Every changes in a component even if a simple setCount() will cause
    a RE-RENDER

    - `const selectedItem = items.find((item) => item.isSelected)` is a 
    very expensive operation. For it goes through millions to get to the selected which is 29_999_998
    which runs to a performance issue because every re-render it runs the operation

    - useMemo is a hook that memoizes a value and returns the same value until any of the dependencies
    and the dependency array changes until then it will recompute a new value

    - use only when necessary. In this case 29 Million entries will cause slow process if it will be
    computed again and again even if it is not necessary especially if the entries are still the same value

*/