import Link from 'next/link'
import Head from 'next/head'
const Header = () => {

    return (
        <>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/favorites">
                        <a>Favorites</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Header