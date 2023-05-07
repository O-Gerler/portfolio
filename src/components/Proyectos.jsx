import CardProyecto from "./CardProyecto"

const Proyecto = () => {

  const proyectos = [
    {
      id: 1,
      nombre: 'Landetxa K.T.',
      imagen: 'src/assets/imagenesProyectos/capturaWebLandetxa.PNG',
      descripcion: 'Página hecha para el Club de Fútbol Landetxa K.T.',
      github: '',
      link: 'http://landetxa.es'
    },
    {
      id: 2,
      nombre: 'Citas React',
      imagen: 'src/assets/imagenesProyectos/capturaCitasReact.PNG',
      descripcion: (<>
        <span className="px-2">Página de citas médicas hecha con <strong>React, Tailwind CSS y Vite</strong></span>
      </>),
      github: 'https://github.com/O-Gerler/citas-react',
      link: 'https://master--gregarious-macaron-0b67bf.netlify.app/'
    },
    {
      id: 3,
      nombre: 'Campamento',
      imagen: 'src/assets/imagenesProyectos/capturaCampamento.PNG',
      descripcion:  (<>
        <span className="px-2">Proyecto de fin de curso full-stack hecho con <strong>Java, Bootstrap y MySQL</strong></span>
        <br />(En Desarrollo)
      </>),
      github: 'https://github.com/O-Gerler/campamentoDeVerano2',
      link: ''
    }
  ]

  return (
    <section name='proyectos' className="w-full min-h-screen bg-fondo bg-cover bg-center rotate-180 flex justify-center items-center mb-20">
        <div className="rotate-180 w-full md:w-3/4">
            <h2 className="text-5xl w-11/12 font-semibold mb-10 px-4">Algunos de mis proyectos</h2>
            <div className="flex justify-center items-center gap-20 flex-wrap">
                {proyectos.map(({ id, nombre, imagen, descripcion, github, link }) => (
                  <CardProyecto 
                    key={id}
                    nombre={nombre}
                    imagen={imagen}
                    descripcion={descripcion}
                    github={github}
                    link={link}
                  />
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default Proyecto