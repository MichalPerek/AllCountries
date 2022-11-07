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
        return (<Fragment>

            <Link to={`/`}>
                <button>Go back</button>

            </Link>

            <div>
                <img src={currentCountry.flag} alt="" className={classes.flag}/>
                <div>
                    <p>{currentCountry.name}</p>
                    <div>
                        <ul>
                            <li>
                                <p><b>Population: </b>{currentCountry.population}</p>
                            </li>
                            <li>
                                <p><b>Region: </b>{currentCountry.region}</p>
                            </li>
                            <li>
                                <p><b>Sub region: </b>{currentCountry.subRegion}</p>
                            </li>
                            <li>
                                <p><b>Capital: </b>{currentCountry.capital}</p>
                            </li>
                            <li>
                                <p><b>Top level domain: </b>{currentCountry.domain}</p>
                            </li>
                            <li>
                                <p><b>Currencies: </b>
                                    <ul>
                                        {(Object.keys(currentCountry.currencies)).map((currency) =>
                                            <li>{currency}</li>)}
                                    </ul>
                                </p>
                            </li>
                            <li>

                                <p><b>Languages: </b>
                                    <ul>
                                        {(Object.values(currentCountry.languages)).map((lang) => <li>{lang}</li>)}
                                    </ul>


                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </Fragment>)
    } else {
        return (<h1>nothing</h1>)
    }

}

export default CountryDetails