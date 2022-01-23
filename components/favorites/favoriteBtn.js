import { setToLocalStorage, getFromLocalStorage } from '../../utilities/util'
import { useState, useEffect } from 'react'
const checkCityInArray = (arr, cityId) => {

    if (arr === null || arr === undefined || arr.length === 0) return false
    if (arr.find(city => city.cityId.toString() == cityId)) {
        return true
    } else {
        return false
    }
}

const FavoriteBtn = ({ cityId, cityName }) => {

    const [favorites] = useState(() => getFromLocalStorage('favorites'))
    const [isChecked, setIsChecked] = useState(checkCityInArray(favorites, cityId))

    useEffect(() => {
        let currentFavorites = getFromLocalStorage('favorites')
        setIsChecked(checkCityInArray(currentFavorites, cityId))

    }, [cityId])

    const handleChange = ({ checked }) => {
        if (checked) return handleAddFavorite()
        handleRemoveFavorite()
    }
    const handleAddFavorite = () => {
        let currentFavorites = getFromLocalStorage('favorites')
        if (!currentFavorites) {
            setToLocalStorage('favorites', JSON.stringify([{ cityId: cityId, cityName: cityName }]))
            setIsChecked(true)
        } else {
            if (!checkCityInArray(currentFavorites, cityId)) {
                setToLocalStorage('favorites', JSON.stringify([...currentFavorites, { cityId: cityId, cityName: cityName }]))
                setIsChecked(true)
            }
        }
    }

    const handleRemoveFavorite = () => {
        let currentFavorites = getFromLocalStorage('favorites')
        let index = currentFavorites.findIndex(el => el.cityId === cityId)
        currentFavorites.splice(index, 1)
        setToLocalStorage('favorites', JSON.stringify(currentFavorites))
        setIsChecked(false)
    }

    return (
        <div className=''>
            <label htmlFor="id-of-input" className=''>
                <input type="checkbox" id="id-of-input" checked={isChecked} onChange={(e) => handleChange(e.target)} />
            </label>
        </div>
    )
}

export default FavoriteBtn
