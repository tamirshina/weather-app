import CurrentWeather from './currentWeather'
import Forecast from './forecast'
import FavoriteBtn from './favoriteBtn'
const DisplayedCity = ({ city }) => {

    return (
        <>
            <CurrentWeather city={city} />
            <FavoriteBtn city={city} />
            <Forecast city={city} />
        </>
    )
}

export default DisplayedCity