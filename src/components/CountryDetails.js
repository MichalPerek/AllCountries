import {Link, useParams} from "react-router-dom";
import classes from "./CountryDetails.module.css"
import {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentCountry} from "./countriesSlice";


const CountryDetails = () => {

    const dispatch = useDispatch()
    const currentCountry = useSelector(state => state.countries.currentCountry)

    const {countryName} = useParams()

    useEffect(() => {
        dispatch(updateCurrentCountry(countryName))
    }, [countryName])


    if (currentCountry) {
        return (
            <div className={classes.card}>
                <div className={classes.card__flag}>
                    <img src={currentCountry.flag} alt="" className={classes.card__flag__image}/>
                </div>
                    <div className={classes.card__title}>{currentCountry.name}</div>
                    <div className={classes.card__desc}>
                        <ul className={classes.card__info}>
                            <li>
                                <b>Population: </b>{currentCountry.population}
                            </li>
                            <li>
                                <b>Region: </b>{currentCountry.region}
                            </li>
                            <li>
                                <b>Sub region: </b>{currentCountry.subRegion ? currentCountry.subRegion : "-"}
                            </li>
                            <li>
                                <b>Capital: </b>{currentCountry.capital}
                            </li>
                            <li>
                                <b>Top level domain: </b>{currentCountry.domain}
                            </li>
                            <li>
                                <b>Currencies: </b>
                                <ul className={classes.card__info__list}>
                                    {(Object.keys(currentCountry.currencies)).map((currency) =>
                                        <li>{currency}</li>)}
                                </ul>
                            </li>
                            <li>

                                <p><b>Languages: </b>
                                    <ul className={classes.card__info__list}>
                                        {(Object.values(currentCountry.languages)).map((lang) => <li>{lang}</li>)}
                                    </ul>


                                </p>
                            </li>
                        </ul>
                    </div>
                <div className={classes.card__footer}>
                    <Link to={`/`}>
                        <button className={classes.card__button}>Go back</button>
                    </Link>
                </div>

            </div>)
    } else {
        return (<h1>No country found :(</h1>)
    }

}

export default CountryDetails