import HomeController from "./Components/Home/HomeController"
import {HashRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomeController/>} ></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
