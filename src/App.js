import './App.css';
import Layout from "./components/Layout";
import {Route, Routes, BrowserRouter, useRoutes} from "react-router-dom";
import AllCountries from "./components/AllCountries";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>

            <Route index element={<AllCountries />} />

            <Route path="countries/">

                <Route path=":countryName" exact element={<CountryDetails />} />

            </Route>

        </Route>
    </Routes>

  );
}

export default App;
