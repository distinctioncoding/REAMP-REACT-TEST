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
            <h1 style={{ fontFamily: 'SF Pro Display', fontWeight: 200 }}>Thin Weight (200)</h1>
            <h1 style={{ fontFamily: 'SF Pro Display', fontWeight: 400 }}>Regular (400)</h1>
            <h1 style={{ fontFamily: 'SF Pro Display', fontWeight: 500 }}>Medium (500)</h1>
            <h1 style={{ fontFamily: 'SF Pro Display', fontWeight: 600 }}>Semibold (600)</h1>
            <h1 style={{ fontFamily: 'SF Pro Display', fontWeight: 700 }}>Bold (700)</h1>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App