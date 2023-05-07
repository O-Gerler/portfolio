import { HiOutlineArrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import 'animate.css'
import blob from '../assets/blob.svg'
import blob2 from '../assets/blob2.svg'
import blob3 from '../assets/blob3.svg'
import TarjetaInfo from './TarjetaInfo'

const Home = () => {
  return (
    <>
      <section name='home' className='flex justify-center items-center px-2 w-full h-screen relative animate__animated animate__fadeInDown'>
        <img src={blob} alt="donut azul flotando" className='absolute w-80 top-0 left-[60%] text-indigo-400 hidden md:block '/>
        <img src={blob2} alt="donut azul flotando" className='absolute md:w-80 md:top-0 left-[12%] w-40 -z-[1] top-[10%]'/>
        <img src={blob3} alt="donut azul flotando" className='absolute w-40 md:w-80 top-3/4 md:top-[56%] block left-1/4 md:left-1/2'/>
        <div className='flex flex-col-reverse md:flex-row w-11/12 justify-center items-center gap-10'>
          <div className='w-full md:w-3/4 md:mr-8 flex justify-center items-center gap-2 md:items-start flex-col'>
            <h2 className='text-6xl font-bold mb-4 w-full'>Hola, soy <span className='text-blue-400'>Oier</span></h2>
            <p className='text-md md:text-xl'>Soy un estudiante apasionado por la programación y el desarrollo web, con ganas de aprender y trabajar en equipo para crear proyectos increíbles. ¡Hablemos!</p>
            <div className='flex gap-6 self-start w-11/12 md:w-full'>
              <button className='group bg-gradient-to-r from-blue-500 to-indigo-400 p-3 rounded-md mt-3 text-white'>
                <Link to='proyectos' smooth duration={500} className='flex justify-center items-center gap-2'> 
                Proyectos
                <span className='group-hover:rotate-90 duration-300'><HiOutlineArrowRight size={15}/></span>
                </Link> 
              </button>
              <button className='group bg-gradient-to-r from-blue-500 to-indigo-400 p-3 flex justify-center items-center gap-2 rounded-md mt-3 text-white'>
                <a href='/CV_Oier.pdf' download='cv_Oier' target='_blank' rel='noreferrer'>
                  Descargar CV
                </a>
              </button>
            </div>
          </div>  
        </div>
      </section>
      <TarjetaInfo />
    </>
  )
}

export default Home