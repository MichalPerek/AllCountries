import classes from "./SingleCountry.module.css"
import {useSelector} from "react-redux";

const SingleCountry = (props) => {

    const flag = props.flag
    const name = props.name
    const population = props.population
    const region = props.region
    const capital = props.capital

    const darkMode = useSelector((state) => state.countries.darkMode)

    return (
        <div className={classes.card} data-theme={darkMode}>
            <img src={flag} alt="" className={classes.flag}/>

            <div className={classes.card__desc}>
                <p className={classes.card__title}>{name}</p>
                <ul>
                    <li>
                        <p><b>Population: </b>{population}</p>
                    </li>
                    <li>
                        <p><b>Region: </b>{region}</p>
                    </li>
                    <li>
                        <p><b>Capital: </b>{capital}</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default SingleCountry