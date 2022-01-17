import SearchBox from './searchBox'
import DisplayedCity from './displayedCity'
import styles from '../styles/Home.module.css'
const Container = () => {

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
            <SearchBox />
            <DisplayedCity city={'tel-aviv'} />
        </div>
    )
}

export default Container