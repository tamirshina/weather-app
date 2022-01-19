import { useState } from 'react'

function getInitialValue(key) {

    if (typeof window !== "undefined") {
        // Client-side-only code
        const item = window.localStorage.getItem(key)

        if (item === "undefined" || !item) {
            return null
        } else {
            return JSON.parse(item)
        }
    }

}

export default function useLocalStorage(key) {

    const [storedValue, setStoredValue] = useState(() => getInitialValue(key))

    const setValue = (value) => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem(key, value);
            setStoredValue(value);
        }
    }

    return [storedValue, setValue]
}