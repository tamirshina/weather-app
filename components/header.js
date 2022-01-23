import Link from 'next/link'
import Logo from '../styles/logo'
import Hamburger from '../styles/hamburger'
import { useState } from 'react';
const Header = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-600/75 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Logo />
                <Link href="/">
                    <a className="font-semibold text-xl tracking-tight">Weather App</a>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={handleClick} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <Hamburger />
                </button>
            </div>
            <div className={`${active ? '' : 'hidden'} w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <Link href="/favorites">
                            Favorites
                        </Link>
                    </a>
                </div>
            </div>
        </nav >
    )
}

export default Header

