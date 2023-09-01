
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About ';
import Contact from './pages/Contact';
import PageNotfound from './pages/PageNotfound'
import Policy from './pages/Policy';
import Register from './pages/Register';
import Login from './pages/Login';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
  <>

<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/*' element={<PageNotfound/>}/>
  <Route path='/policy' element={<Policy/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>

</Routes>

  </>
  );
}

export default App;
