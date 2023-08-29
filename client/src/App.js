
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About ';
import Contact from './pages/Contact';
import PageNotfound from './pages/PageNotfound'

function App() {
  return (
  <>

<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/*' element={<PageNotfound/>}/>

</Routes>

  </>
  );
}

export default App;
