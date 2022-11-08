import {Fragment} from "react";
import {Outlet} from 'react-router-dom'
import Navbar from "./Navbar"
import classes from "./Layout.module.css"
import {useSelector} from "react-redux";

const Layout = () => {

    const darkMode = useSelector((state) => state.countries.darkMode)

    return (
        <>
            <Navbar/>
            <main>
                <div className={classes.content} data-theme={darkMode}>
                    <Outlet/>
                </div>
            </main>
        </>)
}

export default Layout