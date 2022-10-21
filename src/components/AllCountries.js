import {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";

import SingleCountry from "./SingleCountry";
import classes from "./AllCountries.module.css"
const AllCountries = () => {


    const countries = useSelector(state => state.countries.countriesFiltered)



    return (

        <Fragment>
            <div className={classes.container} >
                {countries.map((input) => (
                    <SingleCountry
                    name={input.name}
                    id={input.id}
                    population={input.population}
                    region={input.region}
                    capital={input.capital}
                    flag={input.flag}
                    />
                ))}
            </div>

        </Fragment>
    )
}

export default AllCountries