import {Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Countries" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
