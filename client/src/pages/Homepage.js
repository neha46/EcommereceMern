import React ,{useEffect, useState} from 'react';
import Layout from '../components/Layout/Layout';
import Example from './Example';
import { useAuth } from '../Context/auth';

const Homepage = () => {
  const[auth,setAuth]=useAuth()
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(()=>{
    if(localStorage.getItem('auth' )){
      const user = (localStorage.getItem('auth'))
      console.log(user);
      setUser(JSON.parse(user));
  }
},[])
  return (
    <Layout title={"Best Offers"}>
        <h1>home</h1>
        <pre>
          {user?.message}
        </pre>
        <Example/>
    </Layout>
  );  
}

export default Homepage;
