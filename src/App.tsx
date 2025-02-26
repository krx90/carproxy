import React from 'react';
import MenuBar from './components/MenuBar';
import GoOnline from './components/GoOnline';
import LogoBar from './components/LogoBar';
import Chats from './components/Chats';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return <div>
    <LogoBar></LogoBar>
    <Router>
      <Routes>
        {'./components/GoOnline'}
        <Route path="./components/GoOnline" element={<GoOnline />} />
        {'./components/Chats'}
        <Route path="./components/Chats" element={<Chats />} />
      </Routes>
    </Router>
    <MenuBar></MenuBar>
    </div>

}



export default App;
