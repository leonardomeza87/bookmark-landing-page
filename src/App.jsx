import "./sass/App.scss";

import Header from "./components/Header";
import Features from "./components/Features";
import Extensions from "./components/Extensions";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app">
      {/* Main Components */}
      <Header />
      <Hero />
      <Features />
      <Extensions />
      <Footer />
    </div>
  );
}

export default App;
