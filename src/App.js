
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import ResetPass from './Pages/ResetPass/ResetPass';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/Products/ProductDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReview';
import ManageItems from './Pages/Dashboard/ManageItems';
import ManageUsers from './Pages/Dashboard/ManageUsers';
import Reviews from './Pages/Home/Reviews';
import MyPortfolio from './Pages/Home/MyPortfolio';
import MyProfile from './Pages/Dashboard/MyProfile';

function App() {
  return (
    <div className='page-container'>
      <div className="contend-wrap">
        <Navbar></Navbar>
        <Routes>

          <Route path='/' element={<Home></Home>}></Route>

          <Route path='/products' element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }></Route>

          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
            <Route path='manageItem' element={<ManageItems></ManageItems>}></Route>
            <Route path='manageUsers' element={<ManageUsers></ManageUsers>}></Route>
            {/* <Route path='myProfile' element={<MyProfile></MyProfile>}></Route> */}
          </Route>

          <Route path='/productDetails/:id' element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }></Route>

          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/resetPass' element={<ResetPass></ResetPass>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
