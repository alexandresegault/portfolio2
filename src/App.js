import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
const App = () => {
  return (
    <div className="App">
      <Home />
      <div className="skill-about">
        <Skills />
        <About />
      </div>
    </div>
  );
};

export default App;
