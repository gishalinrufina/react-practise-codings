import logo from "./logo.svg";
import "./App.css";
import Calculation from "./Components/Calculation";
import "./style.css";
import Header from "./Components/Header";

function App() {
  return (
    <div className="main">
      <Header />
      <Calculation />
    </div>
  );
}

export default App;
