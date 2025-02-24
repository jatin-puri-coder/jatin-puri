import About from './About'
import Experience from './Experience'
import Home from './Home'
import Music from './Music'
import Nav from './Nav'

function App() {
  return (
    <>
      <div className="container scroll-smooth">
        <div className="w-screen">
          <Nav />
        </div>

        <div className="pt-16">
          <div id="home" className="min-h-screen pt-16 sm:pt-16 md:pt-16">
            <Home />
          </div>

          <div id="about" className="min-h-screen pt-16 sm:pt-16 md:pt-16">
            <About />
          </div>

          <div id="experience" className="min-h-screen pt-16 sm:pt-16 md:pt-16">
            <Experience />
          </div>

          <div id="music" className="min-h-screen pt-16 sm:pt-16 md:pt-16">
            <Music />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
