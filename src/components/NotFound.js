import classes from "./NotFound.module.css"
import magifnierDots from "../images/iconmonstr-magnifier-dots-lined-240.png"

const NotFound = () => {


    return (

        <div className={classes.card}>
            <img src={magifnierDots} alt=""/>
           <p>Nothing was found :(</p>
        </div>

    )
}

export default NotFound