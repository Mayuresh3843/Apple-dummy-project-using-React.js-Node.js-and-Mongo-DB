import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded shadow">
          <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="font-semibold">₹{product.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
