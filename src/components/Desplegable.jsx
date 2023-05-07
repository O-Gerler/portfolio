/* eslint-disable react/prop-types */
import { Link } from 'react-scroll'

const Desplegable = ({ links, nav, setNav }) => {
  return (
    <ul 
    className={`w-full h-screen flex justify-center items-center gap-10 flex-col ${nav ? 'opacity-100 translate-x-0 ease-in-out' :'opacity-0 translate-x-full ease-in-out ' } duration-700 text-black absolute top-0 left-0 md:hidden bg-gradient-to-b from-white via-white to-blue-200 z-20`}>
      {links.map(({ id, link }) => (
        <li
          key={id}
          className="text-2xl hover:text-blue-400 font-medium duration-300 cursor-pointer capitalize"
        >
          <Link to={link} duration={500} smooth activeClass='text-blue-400 scale-105' spy={true} onClick={() => setNav(!nav)} >{link}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Desplegable