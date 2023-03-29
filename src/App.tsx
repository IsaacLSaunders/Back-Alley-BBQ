import Calc from './pages/Calc';
import Navbar from './Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Recipes from './pages/Recipes';
import SignUp from './pages/SignUp';



function App() {

  return (
    <>
      <div className="App">
        <Navbar/>
      </div>
      <div className='content-container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/calc" element={<Calc/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </div>
      <footer>
        <a className='flaticon-attr' href="https://www.flaticon.com/free-icons/grill" target={'_blank'} title="grill icons">Icons created by {'{ Grill: Smashicons }'} - Flaticon</a>
      </footer>
    </>
  )
}

export default App