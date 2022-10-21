import {Link, useParams} from "react-router-dom";
import classes from "./CountryDetails.module.css"
import {Fragment} from "react";
import {useSelector} from "react-redux";


const CountryDetails = () => {



    const { countryName } = useParams()

    const countries = useSelector(state => state.countries.countriesFiltered)
    const currentCountry = countries.find((country) => country.name === countryName);

    const flag = currentCountry.flag
    const name = currentCountry.name
    const nativeName = currentCountry.nativeName
    const population = currentCountry.population
    const region = currentCountry.region
    const capital = currentCountry.capital
    const subRegion = currentCountry.subRegion
    const domain = currentCountry.domain
    const currencies = Object.keys(currentCountry.currencies)
    const languages = Object.values(currentCountry.languages)
    const borders = currentCountry.borders


const findCountry = (currentName) => {
        const countryToReturn = countries.find((country) => country.name === currentName);
        console.log(countryToReturn)
    console.log(countryToReturn.name)
        return countryToReturn.name

}

const test = () => {
console.log(findCountry(countryName))
}

    return (<Fragment>

        <Link to={`/`} >
            <button>Go back</button>

        </Link>

        <button onClick={test}>currencies</button>
        <div>
            <img src={flag} alt="" className={classes.flag}/>
            <div>
                <p>{name}</p>
                <div>
                    <ul>
                        <li>
                            <p><b>Native name: </b>{nativeName}</p>
                        </li>
                        <li>
                            <p><b>Population: </b>{population}</p>
                        </li>
                        <li>
                            <p><b>Region: </b>{region}</p>
                        </li>
                        <li>
                            <p><b>Sub region: </b>{subRegion}</p>
                        </li>
                        <li>
                            <p><b>Capital: </b>{capital}</p>
                        </li>
                        <li>
                            <p><b>Top level domain: </b>{domain}</p>
                        </li>
                        <li>
                            <p><b>Currencies: </b>{currencies.map((currency) => <p>{currency}</p>)} </p>
                        </li>
                        <li>
                            <p><b>Languages: </b>{languages.map((lang) => <p>{lang}</p>)}</p>
                        </li>
                    </ul>
                </div>
                <div>
                    {/*<p><b>Border countries: </b></p>*/}
                    {/*{borders.map((border) => (*/}
                    {/*    <Link to={`/countries/${findCountry(border)}`} >*/}
                    {/*        <p className={classes.card__title}>{border}</p>*/}
                    {/*    </Link>*/}
                    {/*))}*/}
                </div>
            </div>
        </div>



    </Fragment>)
}

export default CountryDetails