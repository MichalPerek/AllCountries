import classes from "./Searchbar.module.css"
import {useDispatch, useSelector} from "react-redux";
import {searchByName, searchByRegion, filterByName, updateCountries} from "./countriesSlice";
import searchGlass from "../images/iconmonstr-search-thin-240.png"

const Searchbar = () => {


    const dispatch = useDispatch();

    const nameFilter = useSelector(state => state.countries.nameFilter)
    const regionFilter = useSelector(state => state.countries.regionFilter)


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
                <img src={searchGlass} alt="" className={classes.icon}/>
                <input onFocus={(e) => e.target.placeholder = ""} onChange={searchHandler} type="text"
                       placeholder="Search for a country..." value={nameFilter}/>
            </div>

            <div className={classes.searchbar__dropdown}>
                <select onChange={selectHandler} value={regionFilter}>
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