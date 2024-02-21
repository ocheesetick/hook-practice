import { React } from 'react'
import UseState from '../components/UseState'
import UseEffect from '../components/UseEffect'

const Home = () => {

  return (
    <div className='p-4 grid grid-cols-4 gap-4'>
      <div className="p-2 bg-yellow-950">
        <UseState  />
      </div>
      <div className="p-2 bg-red-950">
        <UseEffect />
      </div>
    </div>
  )
}

export default Home