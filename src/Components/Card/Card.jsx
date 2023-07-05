

function Card(props) {
  return (
      <div className="container">
          <div className="card">
            <img src={props.img} alt="" />
              <div className="card-body">
                  <h2 className="card-title">{ props.title}</h2>
                  <p className="card-text fs-4">{ props.text}</p>
                  <button>Read More</button>
              </div>
          </div>
      </div>
  )
}

export default Card