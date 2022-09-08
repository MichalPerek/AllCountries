import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from '../components/countriesSlice';



export const store = configureStore({
    reducer: {
        countries: countriesReducer
    }
})

