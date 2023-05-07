import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Desplegable from './Desplegable'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'sobre mi'
    },
    {
      id: 3,
      link: 'proyectos'
    },
    {
      id: 4,
      link: 'conocimientos'
    },
    {
      id: 5,
      link: 'contacto'
    }
  ]

  return (
    <nav className='flex justify-end items-center w-full h-20 px-5 text-white top-0 z-10 fixed'>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li 
            key={id} 
            className='px-4 text-xl cursor-pointer capitalize font-medium text-gray-400 hover:text-blue-400 hover:scale-105 duration-200'
          >
            <Link to={link} duration={500} smooth activeClass='text-blue-400 scale-105' spy={true}>{link}</Link>    
          </li>
          ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 text-gray-400 z-30 md:hidden'>
        {nav ? <FaTimes size={25} /> : <FaBars size={25}/>}
      </div>

      <Desplegable links={links} nav={nav} setNav={setNav}/>
    </nav>
  )
}

export default NavBar