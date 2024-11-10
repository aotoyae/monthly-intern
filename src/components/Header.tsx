import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h1 className="text-red-500">monthly-intern</h1>
      <nav className="flex gap-3 mb-10">
        <Link to="/">메인페이지</Link>
        <Link to="/join">회원가입</Link>
        <Link to="/login">로그인</Link>
        <Link to="/mypage">마이페이지</Link>
      </nav>
    </>
  );
};

export default Header;
