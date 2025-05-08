import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      {/* 你可以稍后在这里添加 <Routes> 和 <Route> */}
      <Routes>
        <Route path="/" element={
          <>
            {/* test code */}
            <h1 className="font-sans font-light">Light (300)</h1>
            <h1 className="font-sans font-normal">Regular (400)</h1>
            <h1 className="font-sans font-medium">Medium (500)</h1>
            <h1 className="font-sans font-semibold">Semibold (600)</h1>
            <h1 className="font-sans font-bold">Bold (700)</h1>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App