import classes from "./SingleCountry.module.css"

const SingleCountry = (props) => {

    const flag = props.flag
    const name = props.name
    const population = props.population
    const region = props.region
    const capital = props.capital

    return (
        <div className={classes.card}>
            <img src={flag} alt="" className={classes.flag}/>

            <div className={classes.card__desc}>
                <p className={classes.title}>{name}</p>
                <p className={classes.desc}>Population: </p>
                <p className={classes.val}>{population}</p>
                <span className={classes.val}>Region: </span>
                <span className={classes.desc}>{region}</span>
                <span className={classes.desc}>Capital: </span>
                <span className={classes.val}>{capital}</span>
            </div>

        </div>
    )
}

export default SingleCountry