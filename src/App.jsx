import "./sass/App.scss";

import Header from "./components/Header";
import Features from "./components/Features";
import Extensions from "./components/Extensions";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app">
      {/* Main Components */}
      <Header />
      <Hero />
      <Features />
      <Extensions />
    </div>
  );
}

export default App;
