import {useDispatch, useSelector} from "react-redux";
import SingleCountry from "./SingleCountry";
import classes from "./AllCountries.module.css"
import Searchbar from "./Searchbar";
import { useEffect} from "react";

import {updateCurrentCountry} from "./countriesSlice";
const AllCountries = () => {


    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries.countriesFiltered)


    useEffect( () => {
        dispatch(updateCurrentCountry(""))
        console.log("hehe")
    },[])

    return (

            <div className={classes.container} >
                <Searchbar/>
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




    )
}

export default AllCountries