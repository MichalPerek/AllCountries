import {useDispatch, useSelector} from "react-redux";
import SingleCountry from "./SingleCountry";
import classes from "./AllCountries.module.css"
import Searchbar from "./Searchbar";
import {useEffect} from "react";

import {searchByName, searchByRegion, updateCountries, updateCurrentCountry} from "./countriesSlice";
import NotFound from "./NotFound";

const AllCountries = () => {


    const dispatch = useDispatch()
    const countriesToDisplay = useSelector(state => state.countries.countriesFiltered)


    useEffect(() => {
        dispatch(updateCurrentCountry(""))
        dispatch(searchByName(""))
        dispatch(searchByRegion(""))
        dispatch(updateCountries())
    }, [])


    return (

        <div className={classes.container}>
            <Searchbar/>
            {countriesToDisplay.length?
                countriesToDisplay.map((input) => (
                <SingleCountry
                    name={input.name}
                    id={input.id}
                    population={input.population}
                    region={input.region}
                    capital={input.capital}
                    flag={input.flag}
                />
            )) :
                <NotFound/>

            }
        </div>
    )

}

export default AllCountries