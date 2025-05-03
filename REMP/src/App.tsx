import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Link to="/About" className="text-blue-500 hover:underline">Navigate to the about Page</Link>
              <Home/>
            </div>
          } />

          <Route path="/about" element={
            <div>
              <Link to="/" className="text-blue-500 hover:underline">Navigate to the Home Page</Link>
              <About/>
            </div>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
