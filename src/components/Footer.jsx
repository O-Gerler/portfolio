import {FaGithub, FaInstagram, FaTwitter, FaSearchLocation, FaPhoneAlt, FaReact} from 'react-icons/fa'
import {AiOutlineMail, AiOutlineDownload} from 'react-icons/ai'
import {MdSchool} from 'react-icons/md'
import {SiTailwindcss} from 'react-icons/si'
import Link from './Link'

const Footer = () => {
  return (
    <footer className="min-h-80 bg-gray-900 w-full flex justify-center gap-10 p-5 flex-col md:flex-row flex-wrap items-start md:items-end md:gap-8 xl:gap-20 md:pt-20 md:justify-start xl:justify-center mt-10 md:pb-20 md:mb-0">
        <div>
            <ul className='flex justify-center items-start flex-col gap-5'>
                <Link><FaGithub /><a href="https://github.com/O-Gerler" target='_blank' rel='noreferrer'>Github</a></Link>
                <Link><FaTwitter /><a href='https://twitter.com/oier_mayoral' target='_blank' rel='noreferrer'>Twitter</a></Link>
                <Link><FaInstagram /><a href='https://www.instagram.com/oier_mayoral/' target='_blank' rel='noreferrer'>Instragram</a></Link>
            </ul>
        </div>
        <div>
            <ul className='flex justify-center items-start flex-col gap-5'>
                <Link><AiOutlineMail /><a href="mailto:azurmendi5o@outlook.com">azurmendi5o@outlook.com</a></Link>
                <Link><AiOutlineDownload /><a href='/resume.pdf' download='cv_Oier' target='_blank' rel='noreferrer'>Descarga mi CV</a></Link>
            </ul>
        </div>
        <div>
            <ul className='flex justify-center items-start flex-col gap-5'>
                <Link><FaSearchLocation/> Guipuzcoa Irún </Link>
                <Link><MdSchool/> IES Plaiaundi </Link>
                <Link><FaPhoneAlt/> 672 714 401 </Link>
            </ul>
        </div>
        <div>
            <ul className='flex justify-center items-start flex-col gap-5'>
                <Link ><span className='underline'><a href="https://github.com/O-Gerler/portfolio" target='_blank' rel='noreferrer'>Página hecha utilizando:</a></span></Link>
                <Link><FaReact/> React JS </Link>
                <Link><SiTailwindcss/> Tailwind CSS </Link>
            </ul>
        </div>
    </footer>
  )
}

export default Footer