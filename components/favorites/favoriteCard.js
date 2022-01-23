import styles from '../../styles/Home.module.css'
import CurrentWeather from '../currentWeather'
import FavoriteBtn from './favoriteBtn'
const Favorites = ({ cityName, cityId }) => {

    return (
        <li key={cityId} className={styles.card}>
            <div className='flex space-x-8'>
                <CurrentWeather city={cityId} cityName={cityName} />
                <FavoriteBtn cityId={cityId} cityName={cityName} />
            </div>
            <h3>City ID {cityId}</h3>
        </li>
    )
}

export default Favorites
