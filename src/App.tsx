import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Hero from "./components/Hero/Hero";
import Tool from "./components/Tool/Tool";

function App() {
  return (
    <>
      <h1>Hello, React!</h1>
      <Tool/>
      <Greeting name="John" />
      <Greeting name="Bob" />
      <Greeting name="Ioann" age={20} />
      <Hero />
    </>
  );
}

export default App;

// Hero - внутри section
// Buy our unique product!

// SPA single page application