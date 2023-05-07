import Home from "./components/Home"
import NavBar from "./components/NavBar"
import SobreMi from "./components/SobreMi"
import Proyectos from "./components/Proyectos"
import Conocimientos from "./components/Conocimientos"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import SubirArriba from "./components/SubirArriba"

function App() {
  return (
    <>
      <SubirArriba />
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
