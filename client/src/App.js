
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About ';
import Contact from './pages/Contact';
import PageNotfound from './pages/PageNotfound'
import Policy from './pages/Policy';
import Register from './pages/Register';
import Dashboard from './pages/user/Dashboard';
import Login from './pages/Login';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/Layout/Routes/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import AdminRoute from './components/Layout/Routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateProduct from './pages/admin/CreateProduct';
import Users from './pages/admin/Users';
import CreateCategory from './pages/admin/CreateCategory';
import Orders from './pages/user/Ordert';
import Profile from './pages/user/Profile';

function App() {
  return (
  <>

<Routes>
  <Route path='/' element={<Homepage/>}/>
    {/* protected route  for user*/}
    <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path="user" element={<Dashboard/>}/>
      <Route path="user/orders" element={<Orders/>}/>
      <Route path="user/profile" element={<Profile/>}/>
      
  </Route>
    
  {/* protected route  for admin*/}
  <Route path='/dashboard' element={<AdminRoute/>}>
      <Route path="admin" element={<AdminDashboard/>}/>
      <Route path="admin/create-product" element={<CreateProduct/>}/>

      <Route path="admin/create-category" element={<CreateCategory/>}/>
      <Route path="admin/users" element={<Users/>}/>
  </Route>

  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/*' element={<PageNotfound/>}/>
  <Route path='/policy' element={<Policy/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/forgot-password' element={<ForgotPassword/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>

  </>
  );
}

export default App;
