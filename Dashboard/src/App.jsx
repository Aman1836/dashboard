import { useState } from 'react'
import './App.css'
import LeftBox from './comp/LeftBox'
import MidBox from './comp/MidBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' w-full h-screen flex '>
    <LeftBox />
    <MidBox/>
    </div>
    </>
  )
}

export default App
