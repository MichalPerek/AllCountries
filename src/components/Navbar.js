import classes from "./Navbar.module.css"
import moonEmpty from "../images/moon empty.png"
import moonFull from "../images/moon full.png"
import {useDispatch, useSelector} from "react-redux";
import {darkModeToggle} from "./countriesSlice"

const Navbar = () => {

    const dispatch = useDispatch();

    const darkMode = useSelector((state) => state.countries.darkMode)

    const darkModeHandler = () => {
        dispatch(darkModeToggle())
    }

    return (

        <div className={classes.navbar} onClick={darkModeHandler}>
            <p className={classes.navbar__title}>Where in the world?</p>
            <div className={classes.navbar__darkmode}>
                <img  src={darkMode? moonFull : moonEmpty} alt="" className={classes.darkmode__logo}/>
                <p  className={classes.darkmode__title}>{darkMode? "Dark Mode" : "Day Mode"}</p>
            </div>
        </div>
    )
}

export default Navbar