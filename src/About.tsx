export default function About() {
  return (
    <>
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          About Me
        </h1>
        <div className="flex justify-center items-center">
          <img
            src="/mypic.png"
            alt="Jatin picture"
            className="h-auto max-w-60 "
          ></img>
        </div>
        <div className="bg-sky-100 rounded-3xl p-3 text-justify mx-10 sm:mx-20 lg:mx-56">
          <p>
            Hello there! I'm Jatin, a web developer and musician based in
            Christchurch, New Zealand. With a passion for both music and
            technology, I love crafting intuitive digital experiences, solving
            complex problems, and designing functional databases. If you're
            looking to collaborate on a website, app, or software project, feel
            free to reach out! I'm available for freelance and contract work —
            <a
              className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300 underline decoration-wavy decoration-2 underline-offset-4"
              href="https://silentmonkey.co.nz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to see what I've been working on.
            </a>
          </p>

          {/* <p>
            Hello there! I'm Jatin, a web developer and musician currently based
            in Christchurch, New Zealand! I am a creative individual with a
            passion for music and technology. I enjoy problem-solving and have a
            keen eye for aesthetic designs and creating databases. If you are
            interested in collaborating on a Website, App or Software, please
            feel free to contact me. I am available for freelance projects and
            contract work -{' '}
            <a
              className="font-bold"
              href="https://silentmonkey.co.nz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here for more on that
            </a>
          </p> */}
          <br></br>
          <h2 className="font-bold">Tech stack I work with</h2>

          <ul className="mt-2 list-disc pl-10">
            <li>
              Frontend - React, React Native, Tailwind, Three.js, Flutter, HTML
              & CSS
            </li>
            <li>Backend - Node.js, Express.js, Firebase, SQLite</li>
            <li>Testing & Tools - Vitest, Jest, Git</li>
            <li>Languages - Javascript, Typescript, Dart</li>
          </ul>
        </div>
      </div>
    </>
  )
}
