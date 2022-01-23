import { useSelector, useDispatch } from 'react-redux'
import SearchBox from '../searchBox'
import DisplayedCity from '../displayedCity'
import styles from '../../styles/Home.module.css'
import { changeCity } from '../../app/actions'
const Container = () => {

    const city = useSelector((state) => state.cityData.cityId)
    const cityName = useSelector((state) => state.cityData.cityName)
    const dispatch = useDispatch()

    const handleClick = (cityKey, cityName) => {
        dispatch(changeCity(cityKey, cityName))
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