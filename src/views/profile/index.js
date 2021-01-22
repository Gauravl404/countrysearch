import React, { useContext, useState, useEffect } from "react";

import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import Page from "../../components/Page";
import Profile from "./Profile";
import Activity from "./Activity";
import About from "./About";

import { countryCodeContext } from "../../App";
import { countryContext } from "../../App";
//import Typography from "src/theme/typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  marginTop: {
    marginBlockStart: theme.spacing(2),
  },
}));

const Account = () => {
  const classes = useStyles();

  const countryCode = useContext(countryCodeContext);
  const currentCountryCode = countryCode.currentCountryCode;

  const countriesValue = useContext(countryContext);
  const loading = countriesValue.loading;
  const setLoading = countriesValue.setLoading;

  const [country, setCountry] = useState({
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
  });

  const getCountry = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${currentCountryCode}`,
        {
          method: "GET",
        }
      );

      const parseRes = await res.json();

      setCountry(parseRes);

      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  return !loading ? (
    <Page className={classes.root} title='Account'>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3} direction='column' lg={4} md={6} xs={12}>
          <Grid item>
            <Profile country={country} />
          </Grid>
          <Grid item>
            <About country={country} />
          </Grid>
        </Grid>
        <Grid container spacing={3} lg={8} md={6} xs={12}>
          <Grid item lg={12} md={12} xs={12}>
            <Activity country={country} />
          </Grid>
        </Grid>
        <Grid
          className={classes.marginTop}
          container
          spacing={3}
          lg={12}
          md={12}
          xs={12}
        ></Grid>
      </Container>
    </Page>
  ) : (
    <div>
      <Page className={classes.root} title='Account'>
        <Typography gutterBottom variant='h5' component='h4'>
          Loading.........
        </Typography>
      </Page>
    </div>
  );
};

export default Account;
