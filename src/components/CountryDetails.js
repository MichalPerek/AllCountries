import {Link, useParams} from "react-router-dom";
import classes from "./CountryDetails.module.css"
import {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentCountry} from "./countriesSlice";


const CountryDetails = () => {

    const dispatch = useDispatch()
    const currentCountry = useSelector(state => state.countries.currentCountry)

    const {countryName: currentCountryName} = useParams()

    useEffect(() => {
        dispatch(updateCurrentCountry(currentCountryName))
    }, [currentCountryName])

    const countryName = currentCountry.name? currentCountry.name : " - "
    const countryPopulation = currentCountry.population? currentCountry.population : " - "
    const countryRegion = currentCountry.region? currentCountry.region : " - "
    const countrySubRegion = currentCountry.subRegion? currentCountry.subRegion : " - "
    const countryCapital = currentCountry.capital? currentCountry.capital : " - "
    const countryDomain = currentCountry.domain? currentCountry.domain : " - "
    const countryCurrencies = currentCountry.currencies? (Object.keys(currentCountry.currencies)).map((currency) =>
        <li>{currency}</li>) : " - "
    const countryLanguages = currentCountry.languages? (Object.values(currentCountry.languages)).map((lang) => <li>{lang}</li>): " - "

    if (currentCountry) {
        return (
            <div className={classes.card}>
                <div className={classes.card__flag}>
                    <img src={currentCountry.flag} alt="" className={classes.card__flag__image}/>
                </div>
                    <div className={classes.card__title}>{countryName}</div>
                    <div className={classes.card__desc}>
                        <ul className={classes.card__info}>
                            <li>
                                <b>Population: </b>{countryPopulation}
                            </li>
                            <li>
                                <b>Region: </b>{countryRegion}
                            </li>
                            <li>
                                <b>Sub region: </b>{countrySubRegion}
                            </li>
                            <li>
                                <b>Capital: </b>{countryCapital}
                            </li>
                            <li>
                                <b>Top level domain: </b>{countryDomain}
                            </li>
                            <li>
                                <b>Currencies: </b>
                                <ul className={classes.card__info__list}>
                                    {countryCurrencies}
                                </ul>
                            </li>
                            <li>

                                <p><b>Languages: </b>
                                    <ul className={classes.card__info__list}>
                                        {countryLanguages}
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