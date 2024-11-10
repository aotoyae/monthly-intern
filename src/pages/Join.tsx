import { useState } from 'react';

const Join = () => {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [pw, setPw] = useState('');

  // const handleJoin = async () => {
  //   const data = {
  //     id,
  //     nickname,
  //     pw,
  //   };

  //   try {
  //     const response = await axios.post(`${MOCK_URL}/user`, data);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handleJoin();
  };

  return (
    <main className="mt-32">
      <div className="flex w-[420px] flex-col justify-center gap-12 rounded-lg border border-solid border-rightGray px-6 py-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <section className="flex flex-col gap-4">
            <input
              type="text"
              value={id}
              placeholder="아이디"
              onChange={(e) => setId(e.target.value)}
              className="pl-3 border border-solid rounded-sm h-14"
            />
            <input
              type="text"
              value={nickname}
              placeholder="닉네임"
              onChange={(e) => setNickname(e.target.value)}
              className="pl-3 border border-solid rounded-sm h-14"
            />
            <input
              type="password"
              value={pw}
              placeholder="비밀번호"
              onChange={(e) => setPw(e.target.value)}
              className="pl-3 border border-solid rounded-sm h-14"
            />
          </section>
          <button className="h-12 font-bold tracking-wider text-white bg-red-500 rounded-sm">
            회원가입
          </button>
        </form>
      </div>
    </main>
  );
};

export default Join;
