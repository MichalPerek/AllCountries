import classes from "./Navbar.module.css"


const Navbar = () => {
    return (

        <div className={classes.navbar}>
            <p className={classes.navbar__title} >Where in the world?</p>
            <div className={classes.navbar__darkmode}>

                <p>logo</p>
                <p>Night mode</p>

            </div>
        </div>
    )
}

export default Navbar