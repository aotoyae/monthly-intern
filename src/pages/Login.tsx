import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?userId=${id}`
      );
      const data = await response.data;

      if (data.length > 0) {
        setId(data[0].id); // 로그인 성공
        navigate('/');
      } else {
        console.log('사용자를 찾을 수 없습니다.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="mt-32">
      <div className="flex w-[420px] flex-col justify-center gap-12 rounded-lg border border-solid px-6 py-12">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={id}
              placeholder="아이디"
              onChange={(e) => setId(e.target.value)}
              className="pl-3 border border-solid rounded-sm h-14"
            />
            <input
              type="password"
              value={pw}
              placeholder="비밀번호"
              onChange={(e) => setPw(e.target.value)}
              className="pl-3 border border-solid rounded-sm h-14"
            />
          </div>
          <button className="h-12 font-bold tracking-wider text-white bg-red-500 rounded-sm">
            로그인
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
