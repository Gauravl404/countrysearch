import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100,
  },
}));

const About = ({ className, country, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box display='flex' flexDirection='column'>
          <Typography color='textPrimary' gutterBottom variant='h3'>
            About
          </Typography>
          <Divider />
          <Typography color='textPrimary' gutterBottom variant='body1'>
            Common Name : {country.name}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            Native name : {country.nativeName}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            Alternate spellings :{" "}
            {country.altSpellings.map((alt) => `${alt} ,`)}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            Area : {country.area}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            Population : {country.population}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            Capital : {country.capital}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            Domain : {country.topLevelDomain}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            alpha2Code : {country.alpha2Code}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            alpha3Code : {country.alpha3Code}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            callingCodes : {country.callingCodes.map((alt) => `${alt},`)}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            currencies : {country.currencies.map((alt) => `${alt.name},`)}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            languages :{" "}
            {country.languages.map((alt) => `${alt.name} (${alt.nativeName}),`)}
          </Typography>
          <Typography color='textPrimary' gutterBottom variant='body1'>
            regionalBlocs :{" "}
            {country.regionalBlocs.map((alt) => `${alt.acronym},`)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
