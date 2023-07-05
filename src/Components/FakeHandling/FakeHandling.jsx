import React from "react";

const FakeHandling = (props) => {
    const { image, title, description, price } = props.product;

    const handleAddPrice = props.handleAddPrice;

  // image resize
  const imageResize = {
    width: "250px",
  };

  // btn styles
  const btnStyle = {
      background: "none",
      outline: 'none',
      border:'none'
  };
  return (
    <div className="container d-flex  gap-5 align-items-center shadow p-5 mb-5">
      <div>
        <img style={imageResize} src={image} alt="" />
      </div>

      <div className="shadow p-5">
        <h1>{title}</h1>
        <p>{description}</p>
        <span className="display-2 d-block mb-4">{price}</span>
        <button style={btnStyle} className="shadow px-5 text-dark fs-2" onClick={()=> handleAddPrice(props.product)}>Add Price</button>
      </div>
    </div>
  );
};

export default FakeHandling;
