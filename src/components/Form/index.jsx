import Input from '../Input'

const Form = ({ onSubmit }) => {

  const saveSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    const name = event.target[ 0 ].value
    const email = event.target[ 1 ].value
    onSubmit(name, email)
  }

  return (
    <form onSubmit={saveSubmit} className='h-full flex flex-col gap-5 items-center justify-center my-12 sm:my-28'>
      <h3 className='dark:text-white text-lg font-bold'>
        Preecha para prosseguir
      </h3>

      <Input required type="text" placeholder=". . ." name="nome"/>
      <Input required type="email" placeholder=". . ." name="e-mail"/>

      <button type='submit' className='main-button'>
        Seguir
      </button>
    </form>
  )
}

export default Form