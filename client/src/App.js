import './App.css';
import Login from './pages/login';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import UserRegister from './pages/userRegister';
import DoctorRegister from './pages/doctorRegister';
import Home from './pages/home';
import About from './pages/about';
import Feedback from './feedback';
import Verify from './pages/verify';
import Contactus from './pages/contactus';
import NotFound404 from './pages/404';
import Unauthorized from './pages/unauthorized';
import axios from 'axios';
import PatientHome from './pages/user/Home'
import { createContext, useEffect, useState } from 'react';
import HeaderPublic from './components/headerPublic';
import HeaderPatient from './components/headerPatient';
import FooterPublic from './components/footerPublic';

let UserContext = createContext()

function App() {

  const [User, setUser] = useState({
    isAuthenticated: false
  })

  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    if (localStorage.getItem('user')?.length) {
      axios.get(`/auth/fetchUser`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user')}`,
        },
      }).then((res) => {
        setUser((prev) => ({ ...prev, isAuthenticated: true }))
        console.log(res);
      }).catch((err) => {
        console.log('object');
        console.log(err);
      }).finally((ee) => {
        console.log('ee');
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
    return () => {

    }
  }, [])
  const LogOut = () => {
    localStorage.clear()
    setUser((prev) => ({ ...prev, isAuthenticated: false }))
  }
  return (
    <div>

      <UserContext.Provider value={{ User: User.isAuthenticated, setUser }} >
        {
          Loading ? Loading : <>

            {User.isAuthenticated ?
              <HeaderPatient LogOut={LogOut} />
              :
              <>
                <HeaderPublic />
              </>
            }
            {User.isAuthenticated == false ?
              <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/userRegiteration" element={<UserRegister />} />
                <Route path="/doctorRegister" element={<DoctorRegister />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contactus />} />
              </Routes>
              :
              <Routes>

                <Route path="/feedback" element={<Feedback />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contactus />} />
                <Route path="*" element={<NotFound404 />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="/patient Home" element={<PatientHome userAccess={['patient']} />} />
              </Routes>
            }


            {User.isAuthenticated ?
              <FooterPublic />
              :
              <FooterPublic />
            }
          </>

        }
      </UserContext.Provider>

    </div>
  );
}
export default App;
export { UserContext } 
