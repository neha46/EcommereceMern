import React ,{useEffect, useState} from 'react';
import Layout from '../components/Layout/Layout';
import Example from './Example';
import { useAuth } from '../Context/auth';

const Homepage = () => {
  const[auth,setAuth]=useAuth()
  const [user, setUser] = useState(null);



  return (
    <Layout title={"Best Offers"}>
        <h1>home</h1>
        <pre>
          {/* {user?.message} */}
          {JSON.stringify(auth,null,4)}
        </pre>
        <Example/>
    </Layout>
  );  
}

export default Homepage;
