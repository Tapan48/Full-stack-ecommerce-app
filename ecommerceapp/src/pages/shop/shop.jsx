// import React from "react";
// import { PRODUCTS } from "../../products";
// import { Product } from "./product";

// import "./shop.css";
// const Shop = () => {
//   return (
//     <div className="shop">
//       <div className="shop-title">
//         <h1>tapans store</h1>
//       </div>

//       <div className="products">
//         {PRODUCTS.map((product) => (
//           <Product data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;

import React, { useEffect, useState } from "react";
import { Product } from "./product";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/products");
        const data = await response.json();
        console.log("list of 8 products", data);

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shop">
      <div className="shop-title">
        <h1>tapans store</h1>
      </div>

      <div className="products">
        {Products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
