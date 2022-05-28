import { Route, Routes } from "react-router-dom";
import "tw-elements";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
