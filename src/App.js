import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello nnnn World</p>
        <Weather
          city="Rome
        "
        />
      </header>
    </div>
  );
}

export default App;
