import React from 'react';
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from '../../components/Layout/Layout';

const CreateProduct = () => {
  return (
    <>
         <Layout title={"create product"}>
<div className='mt-5 p-3'>
  <div className="row">

    <div className="col-md-3"><AdminMenu/></div>


<div className="col-md-9">



<h1>Create product</h1>
          
  </div>
  </div>
  </div>

    </Layout>
    
      
    </>
  );
}

export default CreateProduct;
