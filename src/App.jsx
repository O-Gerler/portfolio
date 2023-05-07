import Home from "./components/Home"
import NavBar from "./components/NavBar"
import SobreMi from "./components/SobreMi"
import Proyectos from "./components/Proyectos"
import Conocimientos from "./components/Conocimientos"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <SobreMi />
      <Proyectos />
      <Conocimientos />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
