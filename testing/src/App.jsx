import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apnaapi from './Api/Apnaapi'
import ArrangeCards from './Components/ArrangeCards'
import ArrangeCardsAlpha from './Components/ArrangeCardsAlpha'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ArrangeCards></ArrangeCards> */}
      <ArrangeCardsAlpha></ArrangeCardsAlpha>
    </>
  )
}

export default App
