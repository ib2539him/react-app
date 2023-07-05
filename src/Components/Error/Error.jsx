import { useEffect, useState } from "react";
import ErrorHandling from "../ErrorHandling/ErrorHandling";
import { SelectedCart } from "../Cart/SelectedCart";







function Error() {


  // state use here all products
  const [products, setProducts] = useState([]);


  // state use only selected products
  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
    .then (data => setProducts(data))
  })


  // set event handler for add total price
  const handleAddPrice = (product) => {
    const newCart = [...cart, product];
    setCart(newCart)
  }

  return (
    <div className="container my-3 shadow p-3">
      <h2>product length {products.length}</h2>
      <h3>cart length {cart.length}</h3>

      <SelectedCart cart={cart}> </SelectedCart>

      {products.map((product) => (
        <ErrorHandling
          product={product}
          key={product.id}
          handleAddPrice={handleAddPrice}
        ></ErrorHandling>
      ))}
    </div>
  );
}

export default Error