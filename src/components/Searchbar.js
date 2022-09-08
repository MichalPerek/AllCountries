import classes from "./Searchbar.module.css"
import {useDispatch} from "react-redux";
import {searchByName, searchByRegion, filterByName} from "./countriesSlice";

const Searchbar = () => {


    const dispatch = useDispatch();

    const searchHandler = event => {
        let searchValue = event.target.value;
        dispatch(searchByName(searchValue))
        // dispatch(filterByName())

    }

    const selectHandler = event => {
        let selectValue = event.target.value;
        dispatch(searchByRegion(selectValue))

    }


    return (

        <div className={classes.searchbar}>

            <div className={classes.searchbar__searchpad}>
                <input onChange={searchHandler} type="text" />
            </div>

            <div className={classes.searchbar__dropdown}>
                <select onChange={selectHandler}>
                    <option selected hidden>Filter by region</option>
                    <option value="">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

        </div>
    )
}

export default Searchbar