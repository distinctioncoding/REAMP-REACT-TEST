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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" /> npm install react-router-dom
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <BrowserRouter>
      <div className="p-4">
        <nav className="space-x-4 mb-6">
          <h2>测试Route</h2>
          

         
        </nav>

        <Routes>
          <Route path="/" element={
            <div>
              <Link to="/About" className="text-blue-500 hover:underline">
              <button style={{padding:'10px 20px', fontSize:'16px'}}>Navigate to the about Page</button>
              </Link>
              <Home/>
            </div>
          } />

          <Route path="/about" element={
            <div>
              <Link to="/" className="text-blue-500 hover:underline">
              <button style={{padding:'10px 20px', fontSize:'16px'}}>Navigate to the Home Page</button>
              </Link>
              <About/>
            </div>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
    
  )
}

export default App
