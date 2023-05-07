import { Link } from 'react-scroll'
import {HiOutlineArrowUp} from 'react-icons/hi'

const SubirArriba = () => {
  return (
    <Link to='home' smooth duration={500}>
        <div className='fixed bottom-20 right-8 z-[5] flex justify-center items-center w-10 h-10 rounded-full cursor-pointer border-4 border-blue-400 bg-white'>
            <HiOutlineArrowUp size={25}/>
        </div>
    </Link>
  )
}

export default SubirArriba