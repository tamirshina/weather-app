import styles from '../../styles/Home.module.css'
import { changeCity } from '../../app/actions'
import { useDispatch } from 'react-redux'
import CurrentWeather from '../currentWeather'
import FavoriteBtn from './favoriteBtn'
import Link from 'next/link'

const FavoriteCard = ({ cityName, cityId }) => {

    const dispatch = useDispatch()

    return (
        <li key={cityId} className={styles.card}>
            <Link href='/' >
                <div onClick={() => dispatch(changeCity(cityId, cityName))} className='flex space-x-8'>
                    <CurrentWeather cityId={cityId} cityName={cityName} />
                    <FavoriteBtn cityId={cityId} cityName={cityName} />
                </div>
            </Link>
            <h3>City ID {cityId}</h3>
        </li>
    )
}

export default FavoriteCard
