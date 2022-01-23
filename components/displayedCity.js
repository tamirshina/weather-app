import CurrentWeather from './currentWeather'
import Forecast from './forecast'
import FavoriteBtn from './favorites/favoriteBtn'
const DisplayedCity = ({ city, cityName }) => {

    return (
        <div className='relative h-fit rounded overflow-hidden shadow-2xl p-5'>
            <div className='flex justify-between flex-row-reverse'>
                <FavoriteBtn cityId={city} cityName={cityName} />
                <CurrentWeather cityId={city} cityName={cityName} />
            </div>
            <div className='flex-wrap justify-around'>
                <Forecast cityId={city} />
            </div>
        </div>
    )
}

export default DisplayedCity

