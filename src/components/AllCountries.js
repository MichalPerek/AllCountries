import {useDispatch, useSelector} from "react-redux";
import SingleCountry from "./SingleCountry";
import classes from "./AllCountries.module.css"
import Searchbar from "./Searchbar";
const AllCountries = () => {


    const countries = useSelector(state => state.countries.countriesFiltered)



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