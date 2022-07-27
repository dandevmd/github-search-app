import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import User from './pages/User.jsx'
import Notfound from './pages/Notfound.jsx';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';


function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">

        <Navbar/>

        <main className='container px-3 pb-12'>
          <Alert/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='users/:login' element={<User/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='notfound' element={<Notfound/>}/>
            <Route path='*' element={<Notfound/>}/>
          </Routes>
        </main>
        
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
