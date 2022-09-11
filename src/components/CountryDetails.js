import {useParams} from "react-router-dom";



const CountryDetails = () => {

    const { countryName } = useParams()

    return <h1>All Countries {countryName} </h1>
}

export default CountryDetails