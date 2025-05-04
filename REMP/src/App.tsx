import './App.css'
<<<<<<< HEAD
import CreateAgentModel from './components/CreateAgentModel'

function App() {
  const [count, setCount] = useState(0)
  const [isModalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);

  return (
    <>
    <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
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
      <button onClick={()=>setModalVisible(true)}>Open Create Agent</button>
      <CreateAgentModel isVisible={isModalVisible} onClose={closeModal}></CreateAgentModel>
    </>
  )
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      {/* 你可以稍后在这里添加 <Routes> 和 <Route> */}
      <Routes>
          <Route path="/"/>
        </Routes>
    </BrowserRouter>
  );
>>>>>>> 7bb9d5579c5122a6f4f489f277585d13fb915308
}

export default App