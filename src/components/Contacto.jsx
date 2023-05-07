import CampoFormulario from "./CampoFormulario"
import blob from '../assets/blob.svg'
import blob2 from '../assets/blob2.svg'

const Contacto = () => {
  
  const campos = [
    {
        id: 1,
        nombre: 'nombre',
        tipo: 'text',
        placeholder: 'Nombre'
    },
    {
        id: 2,
        nombre: 'email',
        tipo: 'email',
        placeholder: 'Email'
    },
    {
        id: 3,
        nombre: 'asunto',
        tipo: 'text',
        placeholder: 'Asunto'
    }
  ]

  return (
    <section name='contacto' className="w-full min-h-screen flex justify-center items-center relative">
        <img src={blob} alt="blob para el formulario" className="absolute top-[20%] left-[67%] -z-10"/>
        <img src={blob2} alt="blob para el formulario" className="absolute w-96 top-[40%] left-[7%] hidden md:block -z-10"/>
        <div className="w-11/12 md:w-3/4 flex justify-center items-center flex-col">
            <h2 className="text-5xl font-semibold mb-10">Contacta Conmigo</h2>
            <form action="https://getform.io/f/5a5c9b2b-9c38-4e1e-b670-791c7083e6ff" method="post" className="flex justify-center items-center flex-col w-full md:w-auto">
                <div className="flex justify-center items-center gap-4 w-full md:w-2/3 flex-col md:flex-row">
                    <div className="flex justify-center items-center gap-4 flex-col w-full">
                        {
                            campos.map(({id, nombre, tipo, placeholder}) => (
                                <CampoFormulario 
                                    key={id}
                                    nombre={nombre}
                                    tipo={tipo}
                                    placeholder={placeholder}
                                />
                            ))
                        }
                    </div>
                    <div className="flex justify-center items-center gap-12 h-[100%] w-full">
                        <textarea name="mensaje" id="mensaje" placeholder="Mensaje" className="h-[274px] resize-none box-border border-2 bg-gray-200 outline-none rounded-md w-full md:w-96 text-xl font-medium pl-2 pt-[25px] block"></textarea>
                    </div>
                </div>
                <input type="submit" value="Enviar" className="bg-gradient-to-r from-blue-500 to-indigo-400 p-3 self-start w-32 cursor-pointer rounded-md mt-3 text-white"/>
            </form>
        </div>
    </section>
  )
}

export default Contacto