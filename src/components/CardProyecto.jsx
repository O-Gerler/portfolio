/* eslint-disable react/prop-types */
import {FaGithub, FaLink} from 'react-icons/fa'

const CardProyecto = ({ nombre, imagen, descripcion, github, link }) => {
  return (
    <div className="group w-96 h-96 bg-white rounded-md shadow-md relative duration-300">
        <img className="w-full h-3/5 bg-cover rounded-t-md" src={imagen} alt="captura del proyecto" />
        <div className='w-full h-3/5 absolute top-0 left-0 bg-white rounded-t-md translate-y-[100%] opacity-0 text-xl flex justify-center items-center flex-col px-3 text-center group-hover:opacity-100 group-hover:translate-y-0 duration-300' >
            {descripcion}
        </div>
        <div className='w-full h-2/5 flex flex-col justify-center align-middle gap-5'>
            <h3 className='text-center text-2xl'>{nombre}</h3>
            <div className='w-full flex justify-center gap-10 items-center'>
                {github && <a className='cursor-pointer' href={github} target="_blank" rel="noreferrer"><FaGithub size={25}/></a>}
                {link && <a className='cursor-pointer' href={link} target="_blank" rel="noreferrer"><FaLink size={25}/></a>}
            </div>
            
        </div>
    </div>
  )
}

export default CardProyecto