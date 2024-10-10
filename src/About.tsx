export default function About() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-center">About Me</h1>
        <div className="flex justify-center items-center">
          <img
            src="/mypic.png"
            alt="Jatin picture"
            className="h-auto max-w-60 "
          ></img>
        </div>
        <div className="bg-sky-100 mx-64 rounded-3xl p-3 text-justify">
          <p>
            Hello there! I'm Jatin, a web developer and musician currently based
            in Christchurch, New Zealand! I am a creative individual with a
            passion for music and technology. I enjoy problem-solving and have a
            keen eye for aesthetic designs and creating databases. If you are
            interested in collaborating on creating a Website, App or Software,
            please feel free to contact me. I am available for freelance
            projects, contract work or full-time employment.
          </p>
          <br></br>
          <h2 className="font-bold">Some of my key skills and attributes - </h2>

          <ul className="mt-2 list-disc pl-10">
            <li>
              Javascript, Typescript, NodeJS, React, Redux, React Query, React
              Native, Express, SQLite3, Three.js, Firebase, Tailwind, Vitest,
              Jest, HTML & CSS
            </li>
            <li>Capable of working in high stress conditions</li>
            <li>Strong interpersonal and communication skills </li>
            <li>Adaptable, flexible and able to grasp ideas quickly </li>
            <li>Public speaking </li>
          </ul>
        </div>
      </div>
    </>
  )
}
