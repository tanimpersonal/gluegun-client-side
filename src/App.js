import { Route, Routes } from "react-router-dom";
import "tw-elements";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Purchase from "./Purchase/Purchase";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/purchase" element={<Purchase></Purchase>}></Route>
      </Routes>
    </div>
  );
}

export default App;
