import {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {test} from "./countriesSlice";
import SingleCountry from "./SingleCountry";
import classes from "./AllCountries.module.css"

const AllCountries = () => {

    const dispatch = useDispatch();

    const test2 = useSelector(state => state.countries.test)

    const posts = useSelector(state => state.countries.countries)

    const postsTest = useSelector(state => state.countries.countriesFiltered)


const btnHandler = () => {
dispatch(test())
}

    return (

        <Fragment>

            <div className={classes.container}>
                {postsTest.map((input) => (
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