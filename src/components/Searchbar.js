import classes from "./Searchbar.module.css"
import {useDispatch} from "react-redux";
import {searchByName, searchByRegion, filterByName, updateCountries} from "./countriesSlice";
import searchGlass from "../images/iconmonstr-search-thin-240.png"

const Searchbar = () => {


    const dispatch = useDispatch();

    const searchHandler = event => {
        let searchValue = event.target.value;
        dispatch(searchByName(searchValue));
        dispatch(updateCountries());

    }

    const selectHandler = event => {
        let selectValue = event.target.value;
        dispatch(searchByRegion(selectValue));
        dispatch(updateCountries());
    }


    return (

        <div className={classes.searchbar}>

            <div className={classes.searchbar__searchpad}>
                <img src={searchGlass} alt="" className={classes.icon} />
                <input onChange={searchHandler} type="text" placeholder="Search for a country..." />
            </div>

            <div className={classes.searchbar__dropdown}>
                <select onChange={selectHandler}>
                    <option selected hidden>Filter by region</option>
                    <option value="">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

        </div>
    )
}

export default Searchbar