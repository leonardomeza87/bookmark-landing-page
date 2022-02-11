import "./sass/App.scss";

import Header from "./components/Header";
import Features from "./components/Features";
import Extensions from "./components/Extensions";

function App() {
  return (
    <div className="app">
      {/* Main Components */}
      <Header />
      <Features />
      <Extensions />
    </div>
  );
}

export default App;
