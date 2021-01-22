import "react-perfect-scrollbar/dist/css/styles.css";
import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import GlobalStyles from "./components/GlobalStyles";
//import 'src/mixins/chartjs';
import theme from "./theme";
import routes from "./routes";

export const countryContext = React.createContext();
export const countryCodeContext = React.createContext();

const App = () => {
  const routing = useRoutes(routes);
  const [currentCountryCode, setCurrentCountryCode] = useState("");
  const [countries, setCountries] = useState([
    {
      name: "",
      topLevelDomain: [""],
      alpha2Code: "",
      alpha3Code: "",
      callingCodes: [""],
      capital: "",
      altSpellings: [""],
      region: "",
      subregion: "",
      population: 0,
      latlng: [0.0, 0.0],
      demonym: "",
      area: 0.0,
      gini: 0.0,
      timezones: [""],
      borders: [""],
      nativeName: "",
      numericCode: "",
      currencies: [
        {
          code: "",
          name: "",
          symbol: "",
        },
      ],
      languages: [
        {
          iso639_1: "",
          iso639_2: "",
          name: "",
          nativeName: "",
        },
      ],
      translations: {
        de: "",
        es: "",
        fr: "",
        ja: "",
        it: "",
        br: "",
        pt: "",
      },
      flag: "",
      regionalBlocs: [
        {
          acronym: "",
          name: "",
          otherAcronyms: [""],
          otherNames: [""],
        },
      ],
      cioc: "",
    },
  ]);

  const [loading, setLoading] = React.useState(false);

  const getAllCountries = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://restcountries.eu/rest/v2/all", {
        method: "GET",
      });

      const parseRes = await res.json();
      setCountries(parseRes);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <countryContext.Provider
        value={{
          countries,
          setCountries,
          loading,
          setLoading,
          getAllCountries,
        }}
      >
        <countryCodeContext.Provider
          value={{ currentCountryCode, setCurrentCountryCode }}
        >
          {routing}
        </countryCodeContext.Provider>
      </countryContext.Provider>
      {/* </userSetContext.Provider> */}
    </ThemeProvider>
  );
};

export default App;
