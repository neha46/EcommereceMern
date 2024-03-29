import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Helmet} from 'react-helmet'
import { ToastContainer} from 'react-toastify';



const Layout = ({children,title,description,author,keywords}) => {


  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <meta charSet="UTF-8" />
                <meta name="description" content={description} />
                 <meta name="keywords" content={keywords} />
                  <meta name="author" content={author} />
                <title>{title}</title>
            
      </Helmet>
<Header/>
<main style={{minHeight:"100vh"}}>
  {children}
  <ToastContainer/>
</main>
    
<Footer/>
    </div>
  );
}
Layout.defaultProps={
  title:'Ecommerece App',
  description: "This is a ecommerce mern stack  app",
  author : "Anisha",
  keywords :"ecommerce , reactjs,html,css",
}
export default Layout;
