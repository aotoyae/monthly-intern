import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Layout from './components/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
