import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import CreatePost from './Pages/CreatePost';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';

function App() {
  const [isAuth, setisAuth] = useState(false);
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
        <Route path='/login' element={<Login setisAuth={setisAuth}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
