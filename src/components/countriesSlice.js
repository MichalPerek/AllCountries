import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
// import { sub } from 'date-fns';
import axios from "axios";

const COUNTRIES_URL = 'https://restcountries.com/v3.1/all';

const initialState = {
    countries: [],
    countriesFiltered: [],
    regionFilter: "",
    nameFilter: "",
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    darkMode: false,

}

export const fetchCountries = createAsyncThunk('posts/fetchCountries', async () => {
    const response = await axios.get(COUNTRIES_URL)
    return response.data
})

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {

        darkModeToggle(state) {
            state.darkMode = !state.darkMode
        },

        searchByName(state,action) {
            state.nameFilter = action.payload
                    },

        searchByRegion(state,action) {
            state.regionFilter = action.payload
        },

        updateCountries (state){
            state.countriesFiltered = state.countries.filter(country =>
                country.name.toLowerCase().includes(state.nameFilter.toLowerCase()) &&
                (state.regionFilter ==="" || country.region === state.regionFilter))
        },


    },

    extraReducers(builder){
        builder
            .addCase(fetchCountries.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'succeeded'

                console.log(action.payload)

                const fetchedCountries = action.payload.map((result,index) => ({

                    id: index,
                    name: result.name.common,
                    // nativeName: result.name.nativeName.official,
                    population: result.population,
                    region: result.region,
                    subRegion: result.subRegion,
                    capital: result.capital,
                    domain: result.tld,
                    currencies: result.currencies,
                    languages: result.languages,
                    flag: result.flags.png


                }))

                state.countries = state.countries.concat(fetchedCountries)
                state.countriesFiltered = state.countries

            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

});



export const {darkModeToggle, searchByName, updateCountries, searchByRegion} = countriesSlice.actions

export default countriesSlice.reducer