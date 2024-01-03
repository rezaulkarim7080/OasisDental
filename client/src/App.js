
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './components/layouts/Header';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPasssword from './pages/Auth/ForgotPasssword';
import { ToastContainer, toast } from 'react-toastify';
import Profile from './pages/user/Profile';
import ProductDetails from './pages/ProductDetails';
import PrivateRoute from './components/Routes/Private';

import AddService from './pages/user/AddService';
import MyReviews from './pages/user/MyReviews';
import AllServices from './pages/AllServices';
import MakeAppointmentForm from './components/Form/MakeAppointmentForm';
import MyAppointment from './pages/user/MyAppointment';
import AddReview from './pages/user/AddReview';
import ProfileGoogle from './pages/user/ProfileGoogle';







function App() {



  return (
    <div >
      <BrowserRouter>
        <ToastContainer position="bottom-left" />
        <Header />
        <Routes >



          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPasssword />} />
          <Route path='/all-service' element={<AllServices />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/product/:id" element={<ProductDetails />} />


          {/* //user  */}

          <Route element={<PrivateRoute />}>
            <Route path='/user/profile' element={<Profile />} />
          </Route>
          <Route path='/add-services' element={<AddService />} />
          <Route path='/user/profileGoogle' element={<ProfileGoogle />} />
          <Route path='/add-review' element={<AddReview />} />
          <Route path='/make-appointment' element={<MakeAppointmentForm />} />



        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
