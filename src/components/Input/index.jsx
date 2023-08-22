const Input = (props) => {
  return (
    <label className='main-label'>
      Insira seu {props.name}

      <input className='main-input' {...props}/>
    </label>
  )
}

export default Input