import React from "react";
import Navbar from "./components/navbar/navbar.jsx"
import Products from "./components/navbar/products.jsx"
//import Hello from "./components/navbar/Hello.jsx"
import ReactDom from 'react-dom';

function app()
{
return(
  <div className="w-screen h-screen bg-white ">
    <Navbar />
<h1 className="font-bold ml-6 text-black pt-7">This is Dummy website created by react.js</h1>
<p className="mt-5 ml-6 text-black ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam assumenda impedit, dignissimos error labore, excepturi natus iusto maiores deleniti est officia dolorum non laudantium architecto temporibus odio, praesentium enim. Hic.</p>
<div>
  <Products/>
  
  
</div>
</div>
);
}
export default app;