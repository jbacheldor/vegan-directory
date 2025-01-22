'use client'
 
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import Navigation from './components/Navigation';

type contextType = {
    theme: Boolean,
    toggleTheme: ()=> void
}
 
export const FullyVeganContext = createContext<contextType>({
    theme: false,
    toggleTheme: () => {}
});
 
export default function ParentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
    const [theme, setTheme] = useState(false)

    useEffect(()=> {
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme){
            setTheme(Boolean(storedTheme))
        }
        else {
            localStorage.setItem('theme', String(theme));
        }
    }, [])

    const toggleTheme = () => {
        localStorage.setItem('theme', String(!theme));
        setTheme(prev => {
            return !prev
        })
    }
    
  return <FullyVeganContext.Provider value={{theme, toggleTheme}}>
    {children}</FullyVeganContext.Provider>
}