import { useState } from 'react'
import SearchBox from './searchBox'
import DisplayedCity from './displayedCity'
import styles from '../styles/Home.module.css'
const Container = () => {

    const [city, setCity] = useState(215854)
    const [cityName, setCityName] = useState('Tel-Aviv')

    const handleClick = (cityKey, cityName) => {
        setCity(cityKey)
        setCityName(cityName)
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <span href="#">WeatherApp!</span>
            </h1>
            <SearchBox handleClick={handleClick} />
            <DisplayedCity city={city} cityName={cityName} />
        </div>
    )
}

export default Container