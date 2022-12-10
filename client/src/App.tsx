import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import PrivateRouter from './components/auth/PrivateRouter';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Menu from './components/Menu/Menu';
import EditService from './components/Services/EditService';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRouter>
              <Menu defaultDisplay='grid' />
            </PrivateRouter>
          } />
        <Route
          path='/services'
          element={
            <PrivateRouter>
              <Services />
            </PrivateRouter>
          } />

        <Route
          path='/about'
          element={
            <PrivateRouter>
              <About />
            </PrivateRouter>
          } />
        <Route
          path='/editService'
          element={
            <PrivateRouter>
              <EditService />
            </PrivateRouter>
          } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
