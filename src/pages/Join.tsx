import { useState } from 'react';

interface UserInfo {
  id: number;
  userId: string;
  nickname: string;
  pw: string;
}

const Join = () => {
  const [id, setId] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [response, setResponse] = useState<UserInfo | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: id,
            nickname,
            pw,
          }),
        }
      );

      const data = await response.json();
      setResponse(data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(response);

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
        {response && <h1>{response.userId}</h1>}
      </div>
    </main>
  );
};

export default Join;
