export const SelectedCart = (props) => {
  const cart = props.cart;

  // cartStyle
  const cartStyle = {
    top: "13rem",
    right: "0rem",
    zIndex: "9999999",
  };


  // Add total price use reduce
  const totalPrice = cart.reduce((sum, price) => sum + price.price, 0);

  return (
    <div className="shadow text-end p-5 position-fixed " style={cartStyle}>
      <h1>Selected product : {cart.length}</h1>
      <p className="display-3">Total Price = ${totalPrice}</p>
    </div>
  );
};
