export default function Home() {
  return (
    <main className="bg-gradient-to-bl from-green-200 via-purple-200 to-blue-200 h-screen sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100  xl:bg-orange-100 flex items-center justify-center p-5 ">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full ring ring-transparent transition-shadow max-w-screen-sm flex flex-col gap-2 md:flex-row has-[:invalid]:ring-red-100 has-[:invalid]:ring">
        <input
          className="w-full rounded-full py-3 bg-gray-200 pl-5   ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow-sm invalid:focus:ring-red-100 peer"
          type="text"
          required
          placeholder="이메일"
        />

        <span className="text-red-500 font-medium hidden peer-invalid:block">
          올바른 이메일 형식이 아닙니다.
        </span>

        <button className="bg-black text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium  md:px-10">
          로그인
        </button>
      </div>
    </main>
  );
}
