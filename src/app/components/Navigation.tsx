'use client'
import './Navigation.css';
import Link from '../../../node_modules/next/link';
import { useContext, useEffect, useState } from 'react';
import { FullyVeganContext } from '../parentWrapper';

const Header: React.FC = () => {
    const {theme, toggleTheme} = useContext(FullyVeganContext);
    console.log("theme", theme)

    const [isClient, setIsClient] = useState(false)

    useEffect(()=> {
        setIsClient(true)
    }, [])

    const buttonValue = theme ? "Fully Vegan" : "Not Fully Vegan"

    return (
        <>
        <div id="header">
            <Link id="title" className='links' href="/" >Vegan Directory</Link>
            <Link className='links' href="/search/recipe" >Search Recipe</Link>
            <Link className='links' href="/search/creator" >Search Creator</Link>
            <Link className='links' href="/recommendations" >Recommend Creator</Link>
            <Link className='links' href="/designs" >Designs</Link>
            <button onClick={() => {toggleTheme()}}>{isClient ? buttonValue: ""}</button>
        </div>
        </>
    );
}

export default Header