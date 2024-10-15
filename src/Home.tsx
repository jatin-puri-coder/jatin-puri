export default function Home() {
  return (
    <div className="flex flex-col items-center  h-full">
      <h1 className="title text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold text-center">
        Kia Ora! I'm Jatin Puri. Web Developer + Music Artist
      </h1>

      <div className="homeimg mt-6">
        <img
          className=" slide-in-blurred-bottom w-full"
          src="/Logo(Black).png"
          alt="Logo"
        />
        {/* <h2 className="text-flicker-in-glow name text-center text-cyan-500">
            Jatin Puri
          </h2> */}
      </div>
    </div>
  )
}
