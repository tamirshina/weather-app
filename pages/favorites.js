import { useState } from 'react'
import FavoriteCard from '../components/favorites/favoriteCard'
import styles from '../styles/Home.module.css'
import { getFromLocalStorage } from '../utilities/util'
const Favorites = () => {

    const [favorites] = useState(() => getFromLocalStorage('favorites'))

    return (
        <>
            <h1 className={styles.title}>Favorite cities</h1>
            {
                favorites &&
                <ul className='flex flex-wrap lg:justify-center '>
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
