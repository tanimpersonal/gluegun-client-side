import { Route, Routes } from "react-router-dom";
import "tw-elements";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Login/Login";
import Purchase from "./Purchase/Purchase";
import Register from "./Register/Register";
import RequireAuth from "./RequireAuth/RequireAuth";
import Dashboard from "./Dashboard/Dashboard";
import MyOrder from "./MyOrder/MyOrder";
import AddReview from "./AddReview/AddReview";
import MyProfile from "./MyProfile/MyProfile";
import Blogs from "./Blogs/Blogs";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import NotFound from "./NotFound/NotFound";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path="my-orders" element={<MyOrder></MyOrder>}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
