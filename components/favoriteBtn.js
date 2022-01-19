import style from '../styles/Home.module.css'
import { setToLocalStorage, getFromLocalStorage } from '../utilities/util'
import { addToFavorite } from '../app/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const initialCheck = (arr, city) => {

    if (arr === null || arr === undefined || arr.length === 0) return false
    if (arr.includes(city)) {
        return true
    } else {
        return false
    }
}

const FavoriteBtn = ({ city }) => {

    const [favorites] = useState(() => getFromLocalStorage('favorites'))
    const [isChecked, setIsChecked] = useState(() => initialCheck(favorites, city))

    const dispatch = useDispatch()

    const handleChange = ({ checked }) => {
        if (checked) return handleAddFavorite()
        handleRemoveFavorite()
    }
    const handleAddFavorite = () => {
        if (!favorites) {
            setToLocalStorage('favorites', JSON.stringify([city]))
            setIsChecked(true)
            dispatch(addToFavorite(city))
        } else {
            setToLocalStorage('favorites', JSON.stringify([...favorites, city]))
            setIsChecked(true)
            dispatch(addToFavorite(city))
        }
    }

    const handleRemoveFavorite = () => {

        let newArr = favorites.slice()
        let index = newArr.findIndex(el => el === city)
        newArr.splice(index, 1)
        setToLocalStorage('favorites', JSON.stringify((newArr)))
        setIsChecked(false)
    }

    return (
        <div>
            <label htmlFor="id-of-input" className={style.customCheckbox}>
                <input type="checkbox" id="id-of-input" checked={isChecked} onChange={(e) => handleChange(e.target)} />
                <i className="glyphicon glyphicon-star-empty"></i>
                <i className="glyphicon glyphicon-star"></i>
                <span>Favorite</span>
            </label>
        </div>
    )
}

export default FavoriteBtn