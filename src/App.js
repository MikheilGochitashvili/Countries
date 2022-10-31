import {Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import {useState} from "react";
import IndividualPage from "./components/IndividualPage.jsx";
import Header from "./components/Header.jsx";
function App() {
  const [mode, setMode] = useState(false);
  return (
    <div className="App">
      <Header mode={mode} setMode={setMode} />
      <Routes>
        <Route
          path="/Countries"
          element={<Home mode={mode} setMode={setMode} />}
        ></Route>
        <Route
          path="/:name"
          element={<IndividualPage mode={mode}/>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
