import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apnaapi from './Api/Apnaapi'
import ArrangeCards from './Components/ArrangeCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArrangeCards></ArrangeCards>
    </>
  )
}

export default App
