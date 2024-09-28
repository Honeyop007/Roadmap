import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Resume from './components/resume'
import About from './aboutinfo/about'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<div className='flex flex-row w-[95%] md:w-[90%] justify-center mx-auto'>
  <About />
  <Resume />
</div>

  </>
  )
}

export default App
