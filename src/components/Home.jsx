import { HiOutlineArrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import blob from '../assets/blob.svg'
import blob2 from '../assets/blob2.svg'
import blob3 from '../assets/blob3.svg'
import TarjetaInfo from './TarjetaInfo'

const Home = () => {
  return (
    <>
      <section name='home' className='flex justify-center items-center px-2 bg-white w-full h-screen relative'>
        <img src={blob} alt="donut azul flotando" className='absolute w-80 top-0 left-[60%] text-indigo-400 hidden md:block '/>
        <img src={blob2} alt="donut azul flotando" className='absolute md:w-80 md:top-0 left-[12%] w-40 top-[10%]'/>
        <img src={blob3} alt="donut azul flotando" className='absolute w-40 md:w-80 top-3/4 md:top-[56%] block left-1/4 md:left-1/2'/>
        <div className='flex flex-col-reverse md:flex-row w-full justify-center items-center gap-10'>
          <div className='w-full md:w-3/4 md:mr-8 flex justify-center items-center md:items-start flex-col'>
            <h2 className='text-6xl font-bold mb-4 w-11/12'>Hola, soy <span className='text-blue-400'>Oier</span></h2>
            <p className='text-md md:text-xl w-11/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, autem sequi. Nostrum neque similique eaque nobis error possimus necessitatibus atque aliquid ea, assumenda repudiandae autem sed laudantium! Tempora, ea adipisci.</p>
            <div className='flex gap-3 pl-4 md:pl-0 self-start w-11/12 md:w-full'>
              <button className='group bg-gradient-to-r from-blue-500 to-indigo-400 p-3 rounded-md mt-3 text-white'>
                <Link to='proyectos' smooth duration={500} className='flex justify-center items-center gap-2'> 
                Proyectos
                <span className='group-hover:rotate-90 duration-300'><HiOutlineArrowRight size={15}/></span>
                </Link> 
              </button>
              <button className='group bg-gradient-to-r from-blue-500 to-indigo-400 p-3 flex justify-center items-center gap-2 rounded-md mt-3 text-white'>
                <a href='/resume.pdf' download='cv_Oier' target='_blank' rel='noreferrer'>
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