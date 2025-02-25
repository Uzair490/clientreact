import React from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Policy from './pages/Policy'
import Contact from './pages/Contact'
import Pagenotfound from './pages/Pagenotfound'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Dashboard from './pages/users/Dashboard'
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from './pages/Auth/ForgotPasssword'
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from './pages/Admin/CreateCategory'
import CreateProduct from './pages/Admin/CreateProduct'
import UpdateProduct from './pages/Admin/UpdateProduct'
import Products from './pages/Admin/Products'
import Users from './pages/Admin/Users'
import AdminOrders from './pages/Admin/AdminOrders'
import Orders from './pages/users/Orders'
import Profile from './pages/users/Profile'
import Search from "./pages/Search";
import ProductDetails from './pages/ProductDetails'
import QuestionForm from './Question'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />

        {/* User Dashboard - Protected */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        {/* Admin Dashboard - Protected */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />

          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/Question" element={< QuestionForm/>} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App