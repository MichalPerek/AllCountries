import {Fragment} from "react";
import {Outlet} from 'react-router-dom'
import Navbar from "./Navbar"
import Searchbar from "./Searchbar";
import classes from "./Layout.module.css"
import {useSelector} from "react-redux";

const Layout = () => {

    const darkMode = useSelector((state) => state.countries.darkMode)


    return (
        <Fragment>
            <Navbar />
            <div className={classes.content} data-theme={darkMode}>
                <Searchbar/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </Fragment>
    )
}

export default Layout