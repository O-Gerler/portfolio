/* eslint-disable react/prop-types */
const CampoFormulario = ({ nombre, tipo, placeholder }) => {
  return (
    <div className="flex justify-center items-center gap-12 w-full">
        <label htmlFor={nombre} className="text-xl font-medium w-64 block sr-only">{nombre}</label>
        <input type={tipo} placeholder={placeholder} id={nombre} name={nombre} className='h-20 border-2 bg-gray-200 outline-none rounded-md w-full md:w-96 text-xl font-medium pl-2'/>
    </div>
  )
}

export default CampoFormulario