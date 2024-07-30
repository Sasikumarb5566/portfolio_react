import Landing from "../component/Landing"
import NavBar from "../component/NavBar"
import About from "../component/About"
import Skills from "../component/Skills"
import Projects from "../component/Projects"
import Contact from "../component/Contact"
import Footer from "../component/Footer"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}

export default Home
