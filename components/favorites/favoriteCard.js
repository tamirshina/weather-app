import styles from '../../styles/Home.module.css'
import CardContainer from './cardContainer'
import Link from 'next/link'

const FavoriteCard = ({ cityName, cityId }) => {

    return (
        <li key={cityId} className={styles.card}>
            <Link href='/' >
                <CardContainer cityId={cityId} cityName={cityName} />
            </Link>
            <h3>City ID {cityId}</h3>
        </li>
    )
}

export default FavoriteCard
