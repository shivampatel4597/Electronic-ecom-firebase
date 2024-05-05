import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Notfound from './components/Notfound';


function App() {
  return (

    <BrowserRouter>
    <Routes>
<Route exact path='/' element={<Home/>}   />  
<Route path='/signup' element={<Signup/>}  />
<Route path='/login' element={<Login/>}  />
<Route path="*" element={<Notfound/>} />
    </Routes>
    </BrowserRouter>
    // <div className="App">
    //  <h1>hello world</h1>
    
    // </div>
  );
}

export default App;
