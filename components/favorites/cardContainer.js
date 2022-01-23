import { changeCity } from '../../app/actions'
import { useDispatch } from 'react-redux'
import CurrentWeather from '../currentWeather'
import FavoriteBtn from './favoriteBtn'

const CardContainer = ({ cityName, cityId }) => {

    const dispatch = useDispatch()

    return (
        <>
            <div onClick={() => dispatch(changeCity(cityId, cityName))} className='flex space-x-8'>
                <CurrentWeather cityId={cityId} cityName={cityName} />
                <FavoriteBtn cityId={cityId} cityName={cityName} />
            </div>
        </>
    )
}

export default CardContainer
