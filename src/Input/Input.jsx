import React from 'react'

const Input = (props) => {
  return (
    <label className='bg-gray-300 px-3 rounded-lg shadow-lg dark:bg-dark-200 dark:text-gray-200'>
      Insira seu {props.name}

      <input className='px-2 py-1 my-2 ml-2 bg-transparent invalid:focus:outline-1 invalid:focus:outline-red-400' {...props}/>
    </label>
  )
}

export default Input