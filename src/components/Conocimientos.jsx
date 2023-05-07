import { FaHtml5, FaCss3, FaJava, FaReact, FaBootstrap, FaNodeJs, FaRust, FaLinux, FaGitAlt, FaGithub } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTailwindcss, SiMysql } from 'react-icons/si'

const Conocimientos = () => {
  return (
    <section name='conocimientos' className="min-h-screen w-full flex justify-center items-center">
        <div className='w-2/3'>
                <p className='text-xl md:text-3xl text-center font-semibold mb-5'>Mejor manejo en:</p>
                <ul className='flex justify-center items-center flex-wrap gap-5 mb-20 px-2'>
                    <li><FaHtml5 size={100} color='red'/></li>
                    <li><FaCss3 size={100} color='blue'/></li>
                    <li><FaJava size={100} color='orange'/></li>
                    <li><IoLogoJavascript size={100} color='yellow'/></li>
                </ul>   
            
            
                <p className='text-xl md:text-3xl text-center font-semibold mb-5'>Nociones:</p>
                <ul className='flex justify-center items-center flex-wrap gap-5 mb-20 px-2'>
                    <li><FaReact size={100} color='cyan'/></li>
                    <li><FaBootstrap size={100} color='purple'/></li>
                    <li><FaGitAlt size={100} color='red'/></li>
                    <li><SiTailwindcss size={100} color='cyan'/></li>
                    <li><SiMysql size={100} color='orange'/></li>
                    <li><FaGithub size={100}/></li>
                </ul>
            
            
                <p className='text-xl md:text-3xl text-center font-semibold mb-5'>Aprendiendo:</p>
                <ul className='flex justify-center items-center flex-wrap gap-5 mb-20 px-2'>
                    <li><FaNodeJs size={100} color='green'/></li>
                    <li><FaRust size={100} color='brown'/></li>
                    <li><FaLinux size={100} color='black'/></li>
                </ul>
        </div>
    </section>
  )
}

export default Conocimientos