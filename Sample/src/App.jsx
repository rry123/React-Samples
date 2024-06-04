import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apnaapi from './Api/Apnaapi'
import ToggleColorMode from './Components/Mydarkmode'
import Mycard from './Components/Mycard'
import Sidebar from './Components/Sidebar'
import { Splitscreen } from '@mui/icons-material'

import Navbar from './Components/Navbar'
import Mymainpage from './Components/Mymainpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Sidebar></Sidebar>
    </>
  )
}

export default App
