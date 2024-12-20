'use client'
import { Button } from "./ui/button";
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()


  return (

    <Button className="p-0 m-0 bg-transparent shadow-none border-none hover:bg-transparent" onClick={() => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }}> {
        theme === 'dark' ? <FaSun size={34} color={'#fff'} /> : <FaMoon size={34} color="#000" />
      } </Button>


  )
}