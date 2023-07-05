import { Header } from "./Components/Header/Header";



import Slider from "./Components/Slider/Slider";
import Card from './Components/Card/Card'

import Error from "./Components/Error/Error";


import "./App.css";
import FakeApi from "./Components/FakeApi/FakeApi";
import Counter from "./Components/CounterSection/Counter";



function App() {
  return (
    <>

      <Header />
      <Counter />
      <Error />
      <Slider />
      <FakeApi />



      <div className="card--container container my-5">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <Card
              img="img/watch1.jpg"
              title="This is a beautiful watch"
              text="If you stay motivated you must be working for a purpose and make sure every day is difference form other"
            />
          </div>

          <div className="col-md-4 col-lg-3">
            <Card
              img="img/watch2.jpg"
              title="This is a beautiful watch"
              text="If you stay motivated you must be working for a purpose and make sure every day is difference form other"
            />
          </div>

          <div className="col-md-4 col-lg-3">
            <Card
              img="img/watch3.jpg"
              title="This is a beautiful watch"
              text="If you stay motivated you must be working for a purpose and make sure every day is difference form other"
            />
          </div>

          <div className="col-md-4 col-lg-3">
            <Card
              img="img/watch1.jpg"
              title="This is a beautiful watch"
              text="If you stay motivated you must be working for a purpose and make sure every day is difference form other"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
