import classes from "./SingleCountry.module.css"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const SingleCountry = (props) => {

    const flag = props.flag? props.flag : " - "
    const name = props.name? props.name : " - "
    const population = props.population? props.population : " - "
    const region = props.region? props.region : " - "
    const capital = props.capital? props.capital : " - "

    const darkMode = useSelector((state) => state.countries.darkMode)

    return (

        <div className={classes.card} data-theme={darkMode}>
            <div className={classes.card__flag}>
                <Link to={`/countries/${name}`} className={classes.card__flag__link}>
                    <img src={flag} alt="" className={classes.card__flag__image}/>
                </Link>
            </div>

            <div className={classes.card__desc}>
                <Link className={classes.card__button} to={`/countries/${name}`}>
                    <p className={classes.card__title}>{name}</p>
                </Link>
                <ul>
                    <li className={classes.card__info}>
                        <p><b>Population: </b>{population}</p>
                    </li>
                    <li className={classes.card__info}>
                        <p><b>Region: </b>{region}</p>
                    </li>
                    <li className={classes.card__info}>
                        <p><b>Capital: </b>{capital}</p>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default SingleCountry