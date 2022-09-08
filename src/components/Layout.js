import {Fragment} from "react";
import {Outlet} from 'react-router-dom'
import Navbar from "./Navbar"
import Searchbar from "./Searchbar";
import classes from "./Layout.module.css"

const Layout = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className={classes.content}>
                <Searchbar/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </Fragment>
    )
}

export default Layout