import {Fragment} from "react";
import {Outlet} from 'react-router-dom'
import Navbar from "./Navbar"
import Searchbar from "./Searchbar";

const Layout = () => {
    return (
        <Fragment>
            <Navbar/>
            <Searchbar/>
            <main>
                <Outlet/>
            </main>
        </Fragment>
    )
}

export default Layout