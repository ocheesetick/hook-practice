import { React } from 'react'
import UseState from '../components/UseState'
import UseEffect from '../components/UseEffect'
import UseMemo from '../components/useMemo/UseMemo'
import UseCallBack from '../components/useCallBack/UseCallBack'
import UseContext from '../components/useContext/UseContext'
import UseRef from '../components/UseRef'
import UseReducer from '../components/UseReducer'

const Home = () => {

  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      <div className="p-2 bg-yellow-950">
        <UseState  />
      </div>
      <div className="p-2 bg-red-950">
        <UseEffect />
      </div>
      <div className="p-2 bg-lime-950">
        <UseMemo />
      </div>
      <div className="p-2 bg-sky-950">
        <UseCallBack />
      </div>
      <div className="p-2 bg-violet-950">
        <UseContext />
      </div>
      <div className="p-2 bg-blue-950">
        <UseRef />
      </div>
      <div className="p-2 bg-orange-950">
        <UseReducer />
      </div>
    </div>
  )
}

export default Home