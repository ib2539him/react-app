import { useEffect } from "react";
import { useState } from "react"
import FakeHandling from "../FakeHandling/FakeHandling";
import ManageCart from "../ManageCart/ManageCart";


function FakeApi() {

    const [products, setProducts] = useState([]);

    // Manage cart
    const [cart, setCart] = useState([]);

    useEffect(() => {
       fetch('https://fakestoreapi.com/products')
         .then((res) => res.json())
         .then((data) => setProducts(data));
    }, [])


    // onclick handler on btn
    const handleAddPrice = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
  return (
    <div className="container">
          <h1 className="my-5">Fake Api {products.length}</h1>
          <h2>Manage Cart{cart.length }</h2>
          <ManageCart productCart={cart} ></ManageCart>


      {products.map((product) => (
        <FakeHandling product={product} key={product.id} handleAddPrice={handleAddPrice}></FakeHandling>
      ))}
    </div>
  );
}

export default FakeApi