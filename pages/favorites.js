import { useState } from 'react'
import FavoriteCard from '../components/favorites/favoriteCard'
import { setToLocalStorage, getFromLocalStorage, checkCityInArray } from '../utilities/util'
const Favorites = () => {

    const [favorites] = useState(() => getFromLocalStorage('favorites'))

    return (
        <>
            <h1>Favorite cities</h1>
            {
                favorites &&
                <ul>
                    {
                        favorites.map(fav => {
                            return <FavoriteCard key={fav.cityId} cityName={fav.cityName} cityId={fav.cityId} />
                        })
                    }

                </ul>
            }
        </>
    )
}

export default Favorites
