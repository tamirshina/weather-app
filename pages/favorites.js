
import { useSelector, useDispatch } from 'react-redux'
const Favorites = () => {

    const state = useSelector((state) => state)
    return (
        <>
            <h1>shina</h1>
            <code>{JSON.stringify(state, null, 4)}</code>
        </>
    )
}

export default Favorites
