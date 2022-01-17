
const Forecast = ({ forecast }) => {

    return <>
        {console.log(forecast, 'fff')}
        <h2>5 day forecast</h2>
        {
            forecast && (
                <>
                    <div>{forecast.Headline.Text} </div>
                    <ul>
                        {
                            forecast.DailyForecasts.map(day => {
                                return <li key={day.EpochDate}>
                                    <div>min temp - {day.Temperature.Minimum.Value}</div>
                                    <div>max temp - {day.Temperature.Maximum.Value}</div>
                                </li>
                            }

                            )}
                    </ul>
                </>
            )

        }

    </>
}

export default Forecast

// <h2>{current.Temperature.Metric.Value} +C</h2>

