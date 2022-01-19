import { useState } from 'react'
import SearchBox from './searchBox'
import DisplayedCity from './displayedCity'
import styles from '../styles/Home.module.css'
const Container = () => {

    const [city, setCity] = useState(215854) //(215854)

    const handleClick = (cityKey) => {
        setCity(cityKey)
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
            <SearchBox handleClick={handleClick} />
            <DisplayedCity city={city} />
        </div>
    )
}

export default Container