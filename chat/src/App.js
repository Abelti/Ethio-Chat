import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, HashRouter as Hash} from 'react-router-dom';
import {RegisterComponent} from "./components/Register.jsx"
import {LoginComponent} from './components/Login';
import {HomeComponent} from './components/Home';
import {ChatComponent} from './components/Chat';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <HomeComponent/> } />
        <Route path='/register' element={ <RegisterComponent/> } />
        <Route path='/login' element={ <LoginComponent/> } />
        <Route path='/chat' element={ <ChatComponent/> } />
      </Routes>
      </Router>
    </>
    
  );
}

export default App;
