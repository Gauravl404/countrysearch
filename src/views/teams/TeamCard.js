import React, { useContext } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { countryCodeContext } from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 345,
  },
  statsItem: {
    alignItems: "center",
    display: "flex",
  },
  statsIcon: {
    marginRight: theme.spacing(1),
  },
  description: {
    marginBlockEnd: 10,
  },
  button: {
    marginInlineStart: 10,
    marginBlockEnd: 10,
  },
}));

const TeamCard = ({ className, country, ...rest }) => {
  const navigate = useNavigate();
  const countryCode = useContext(countryCodeContext);

  const setCurrentCountryCode = countryCode.setCurrentCountryCode;
  const classes = useStyles();
  const handledclick = (e) => {
    e.preventDefault();
    setCurrentCountryCode(country.alpha3Code);

    navigate("/profile", { replace: false });
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Team'
          height='240'
          image={country.flag}
          title={country.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h2' component='h2'>
            {country.name}
          </Typography>
          <Typography gutterBottom variant='h5' component='h4'>
            Region : {country.region}
          </Typography>
          <Typography gutterBottom variant='h5' component='h4'>
            Sub Region : {country.subregion}
          </Typography>

          <Typography gutterBottom variant='h5' component='h4'>
            Native name : {country.nativeName}
          </Typography>

          <Typography gutterBottom variant='h5' component='h4'>
            Capital : {country.capital}
          </Typography>

          <Typography gutterBottom variant='h5' component='h4'>
            Total Population : {country.population}
          </Typography>
          <Typography gutterBottom variant='h5' component='h4'>
            Total area : {country.area}
          </Typography>

          <Typography gutterBottom variant='h5' component='h4'>
            Timezones : {country.timezones}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='small'
          variant='outlined'
          color='primary'
          className={classes.button}
          type='submit'
          onClick={(e) => {
            handledclick(e);
          }}
        >
          View Full Details
        </Button>
      </CardActions>
    </Card>
  );
};

TeamCard.propTypes = {
  className: PropTypes.string,
  country: PropTypes.object.isRequired,
};

export default TeamCard;
