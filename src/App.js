import "./App.css";
import Navlink from "./Components/Navlink";
import Routepath from "./Components/Routepath";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          {/* <div className="card-body">
            <span>
              <i className="fas fa-angle-left"></i> 
            </span>
            <span> Back</span>
          </div> */}
          <div className="card-body bg-light">
            <Routepath />
          </div>
          <div className="card-body">
            <Navlink />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
