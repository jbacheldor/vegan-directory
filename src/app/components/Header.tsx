'use client'
import './Header.css';
import Link from '../../../node_modules/next/link';

const Header: React.FC = () => {

    return (
        <>
        <div id="header">
            <Link id="title" className='links' href="/">Vegan Directory</Link>
            <Link className='links' href="/search/recipe">Search Recipe</Link>
            <Link className='links' href="/search/creator">Search Creator</Link>
            <Link className='links' href="/recommendations">Recommned Creator</Link>
        </div>
        </>
    );
}

export default Header