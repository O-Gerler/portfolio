import {FaGithub, FaTwitter} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFileEarmarkArrowDown} from 'react-icons/bs'

const TarjetaInfo = () => {

  const rrss = [
    {
      id: 1,
      child: (
        <> 
          Github <FaGithub size={25}/>
        </>
      ),
      href: 'https://github.com/O-Gerler',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <> 
          Twitter <FaTwitter size={25}/>
        </>
      ),
      href: 'https://twitter.com/oier_mayoral'
    },
    {
      id: 3,
      child: (
        <> 
          Email <AiOutlineMail size={25}/>
        </>
      ),
      href: 'mailto:azurmendi5o@outlook.com'
    },
    {
      id: 4,
      child: (
        <> 
          Resume <BsFileEarmarkArrowDown size={25}/>
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      donwload: 'cv_Oier'
    }
  ]

  return (
    <div className='hidden lg:flex flex-col fixed left-0 top-[43%] z-30'>
      <ul>

        {rrss.map(({ id, href, style, child, donwload }) => (
          <li 
            key={id}
            className={'w-40 h-10 bg-blue-400 duration-300 ml-[-110px] hover:ml-0 hover:rounded-tr-md hover:rounded-br-md ' + style}
          >
          <a 
            href={href} 
            className='h-full w-full flex justify-between px-4 items-center text-xl font-medium text-white'
            download={donwload}
            target='_blank'
            rel='noreferrer'
          >
            {child}
          </a>
        </li>
        ))}

        
      </ul>
    </div>
  )
}

export default TarjetaInfo