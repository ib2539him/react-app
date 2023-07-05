import "./Error.css";
function ErrorHandling(props) {

  // receive all products
  const { image, title, description, price } = props.product;

  // receive event handler
  const handleAddPrice = props.handleAddPrice;

  return (
    <div>
      <div className="Error-item mb-5 shadow p-4 d-flex align-items-center gap-5">
        <div>
          <img className="Error-image" src={image} alt="" />
        </div>
        <div>
          <h3 className="fs-1">{title}</h3>
          <p className="fs-4">{description}</p>
          <p className="display-3 text-danger fw-bold">{price}</p>

        
          <button onClick={()=> handleAddPrice(props.product)}>Add Price</button>
        </div>
      </div>
    </div>
  );
}

export default ErrorHandling;


