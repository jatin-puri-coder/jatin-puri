import About from './About'
import Experience from './Experience'
import Home from './Home'
import Music from './Music'
import Nav from './Nav'
import Projects from './Projects'
function App() {
  return (
    <>
      <div className="scroll-smooth">
        <div className="">
          <Nav />
        </div>

        <div className="pt-16">
          <div id="home" className="h-screen pt-16 -mt-16">
            <Home />
          </div>

          <div id="about" className="h-screen pt-16 -mt-16">
            <About />
          </div>

          <div id="experience" className="h-screen pt-16 -mt-16">
            <Experience />
          </div>

          <div id="projects" className="h-screen pt-16 -mt-16">
            <Projects />
          </div>
          <div id="music" className="h-screen pt-16 -mt-16">
            <Music />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
