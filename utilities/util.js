
export async function name(url) {

    fetch('./currentWeather.txt')
        .then(response => response.json())
        .then(result => setCurrent(result[0]))
        .catch(error => console.log('error at 13', error));
}