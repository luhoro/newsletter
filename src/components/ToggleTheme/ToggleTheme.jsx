import React, { useEffect } from 'react'
import { SunIcon, MoonIcon} from '@heroicons/react/24/solid'

const ToggleTheme = () => {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const pageClasses = document.documentElement.classList

  useEffect(() => {
    systemPreference && pageClasses.add('dark')
  })

  const toggle = () => {
    pageClasses.toggle('dark')
  }

  return (
    <div className="absolute sm:relative sm:block cursor-pointer left-32 sm:left-0">
      <MoonIcon className='block dark:hidden h-8 text-gray-100' onClick={toggle}/>
      <SunIcon className='hidden dark:block h-8 text-gray-100' onClick={toggle}/>
    </div>
  )
}

export default ToggleTheme