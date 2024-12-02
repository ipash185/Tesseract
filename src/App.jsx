import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import Scene4D from './Scene4D.jsx'
import PWABadge from './PWABadge.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Scene4D />
      <PWABadge />
    </>
  )
}

export default App
