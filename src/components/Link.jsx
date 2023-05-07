/* eslint-disable react/prop-types */
const Link = ({ children }) => {
  return (
    <li className="text-md md:text-xl text-white visited:text-white flex justify-center items-center gap-5">{children}</li>
  )
}

export default Link