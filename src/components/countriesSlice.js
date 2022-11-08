import {createSlice, nanoid, createAsyncThunk} from "@reduxjs/toolkit";
// import { sub } from 'date-fns';
import axios from "axios";

const _ = require("lodash");

const COUNTRIES_URL = 'https://restcountries.com/v3.1/all';

const initialState = {
    countries: [],
    countriesFiltered: [],
    currentCountry: "",
    currentCountryBorders: [],
    regionFilter: "",
    nameFilter: "",
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    darkMode: "light",

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
            if (state.darkMode === 'light') {
                state.darkMode = 'dark'
            } else if (state.darkMode === 'dark') {
                state.darkMode = 'light'
            }
        },

        searchByName(state, action) {
            state.nameFilter = action.payload
        },

        searchByRegion(state, action) {
            state.regionFilter = action.payload
        },

        updateCountries(state) {
            state.countriesFiltered = state.countries.filter(country =>
                country.name.toLowerCase().includes(state.nameFilter.toLowerCase()) &&
                (state.regionFilter === "" || country.region === state.regionFilter))

            state.countriesFiltered = _.sortBy(state.countriesFiltered, ['name'])
        },

        updateCurrentCountry(state, action) {
            // console.log(action.payload)
            if (action.payload) {
                state.currentCountry = state.countries.find((country) => country.name === action.payload)
            } else {
                state.currentCountry = ""
            }

        }


    },

    extraReducers(builder) {
        builder
            .addCase(fetchCountries.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'succeeded'

                // console.log(action.payload)

                const fetchedCountries = action.payload.map((result, index) => ({

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
                    flag: result.flags.png,
                    borders: result.borders,
                    cca3: result.cca3


                }))

                state.countries = state.countries.concat(fetchedCountries)
                state.countriesFiltered = _.sortBy(state.countries, ['name'])

            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

});


export const {
    darkModeToggle,
    searchByName,
    updateCountries,
    searchByRegion,
    updateCurrentCountry
} = countriesSlice.actions

export default countriesSlice.reducer