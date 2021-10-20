import "./App.scss";

import { useSelector } from "react-redux";

import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";

function App() {
  const tab = useSelector((store) => store.tab);

  return (
    <div className="App column">
      <Header />
      {tab === "about us" ? <AboutUs /> : <Home />}
    </div>
  );
}

export default App;
