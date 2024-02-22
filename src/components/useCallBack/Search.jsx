import {React, memo} from 'react'

const Search = ({onChange}) => {
  console.log("UseCallback Search Component Rendered.")
  return (
    <input
      className='px-2 border border-slate-300 rounded-md text-sm'
      type='text'
      placeholder='Search users'
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default memo(Search)

/*
  memo 
  - is a hook used for performance. It wraps the component tyring to export and
    it intercept the render of the component and check if the props is different from
    the previous render. 
  - IF the props is different, it will re-render the component, ELSE
    it will not re-render

  Process:
  - memo is checking if the onChange props is changing. If YES, then it will re-render 
  this Search component. Altho now that we used useCallBack to the function that is
  being passed to the onChange prop, it can see now that the value(function from parent) of 
  the prop is not changing and is still the same.

*/