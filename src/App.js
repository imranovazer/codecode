
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import UserPosts from './pages/UserPosts';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/users' element={<Users/>} />
    <Route path='/users/userPost/:id' element={<UserPosts/>}/>
    </Routes>
    </>
  );
}

export default App;
