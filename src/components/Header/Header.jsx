import ToggleTheme from '../ToggleTheme/ToggleTheme'
import logo from '/logo.svg'

const Header = ({ user }) => {
  return (
    <div className='flex h-20 bg-purple-600 justify-between items-center px-5 sm:rounded-xl sm:m-5'>
      <span className='text-gray-100 relative left-8'>
        Olá, {user && user + '!' || 'Usuário!'}
      </span>

      <div className='flex items-center gap-3 transition-all sm:hover:scale-110 cursor-default'>
        <img src={logo} alt="Logo Newsletter" className='h-9' />
        <h1 className='text-gray-100 text-xl'> Newsletter </h1>
      </div>

      <ToggleTheme />
    </div>
  )
}

export default Header