import Home from './pages/Home';
import Chats from './pages/Chats';
import Settings from './pages/Settings'
import NoPage from './pages/NoPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/chats' element={<Chats />}/>
          <Route path='*' element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App;
