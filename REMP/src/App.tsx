import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import CreateAgentModel from './components/CreateAgentModel'
// import { useState } from 'react';


function App() {

  // const [isModalVisible, setModalVisible] = useState(false);
  // const closeModal = () => setModalVisible(false);

  return (
    <BrowserRouter>
      {/* 你可以稍后在这里添加 <Routes> 和 <Route> */}
      <Routes>
          <Route path="/"/>
        </Routes>


        {/* <button onClick={()=>setModalVisible(true)}>Open Create Agent</button>
      <CreateAgentModel isVisible={isModalVisible} onClose={closeModal}></CreateAgentModel> */}

    </BrowserRouter>
  );
}

export default App