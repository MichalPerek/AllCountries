import classes from "./Navbar.module.css"
import moonEmpty from "../images/moon empty.png"
import moonFull from "../images/moon full.png"
import {useDispatch, useSelector} from "react-redux";
import {darkModeToggle} from "./countriesSlice"
import {Link} from "react-router-dom";

const Navbar = () => {

    const dispatch = useDispatch();

    const darkMode = useSelector((state) => state.countries.darkMode)

    const darkModeHandler = () => {

        dispatch(darkModeToggle())
    }

    return (

        <div className={classes.navbar} data-theme={darkMode}>
            <Link to={`/`}>
                <p className={classes.navbar__title}>Where in the world?</p>
            </Link>
            <div className={classes.navbar__darkmode} onClick={darkModeHandler}>
                <img src={(darkMode === 'light') ? moonEmpty : moonFull} alt="" className={classes.darkmode__logo}/>
                <p className={classes.darkmode__title}>{(darkMode === 'light') ? "Day Mode" : "Dark Mode"}</p>
            </div>
        </div>
    )
}

export default Navbar