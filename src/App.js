import './App.css';
import Navbar from './Componets/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from './Componets/Home';
import { Blogs } from './Componets/Blogs';
import Login from './Componets/Login';

function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/8' element={<h2>Page Not Found </h2>}></Route>
    </Routes>
    </>
  );
}

export default App;
