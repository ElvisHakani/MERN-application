import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar'
import Login from './views/Login';
import SignUp from './views/SignUp';
import { useAuthContext } from './hooks/useAuthContext';

function App() {

  const {user} = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='/signup' element={!user ? <SignUp /> : <Navigate to='/' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
