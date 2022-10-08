import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Routes>
     <Route exact path='/' element={ <Home /> } />
      <Route exact path='/about' element={ <About /> } />
      <Route exact path='/contact' element={ <Contact /> } />
      <Route path='/users/add' element={ <AddUser/> } />
      <Route path='/users/edit/:id' element={ <EditUser/> } />
      <Route path='/users/:id' element={ <User/> } />
      <Route path='*' element={ <NotFound /> } />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
