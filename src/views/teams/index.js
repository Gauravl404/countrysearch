import React, { useContext, useState, useEffect } from "react";

import { Box, Container, Grid, makeStyles } from "@material-ui/core";

import Page from "../../components/Page";
import Toolbar from "./Toolbar";
import TeamCard from "./TeamCard";

import { Backdrop, CircularProgress } from "@material-ui/core";
import { countryContext } from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  teamCard: {
    height: "100%",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Teams = () => {
  const classes = useStyles();
  const countriesValue = useContext(countryContext);
  const countries = countriesValue.countries;
  const setCountry = countriesValue.setCountries;
  const loading = countriesValue.loading;
  const getAllCountries = countriesValue.getAllCountries;
  const setLoading = countriesValue.setLoading;
  const [search, setsearch] = useState("");

  const dynamicSearch = async () => {
    try {
      if (search !== "") {
        setLoading(true);
        const res = await fetch(
          `https://restcountries.eu/rest/v2/name/${search}`,
          {
            method: "GET",
          }
        );

        const parseRes = await res.json();
        setCountry(parseRes);
        setLoading(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    dynamicSearch();
  }, [search]);

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <Page className={classes.root} title='Countries'>
      <Container maxWidth={false}>
        <Toolbar setsearch={setsearch} search={search} />
        {!loading ? (
          <Box mt={3}>
            <Grid container spacing={3}>
              {countries.map((country) => (
                <Grid
                  item
                  key={country.numericCode}
                  xl={3}
                  lg={3}
                  md={6}
                  xs={12}
                >
                  <TeamCard className={classes.teamCard} country={country} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color='inherit' />
          </Backdrop>
        )}
      </Container>
    </Page>
  );
};

export default Teams;
