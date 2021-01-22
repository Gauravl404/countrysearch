import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import {
  Avatar,
  Box,
  Card,
  CardContent,
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

const Profile = ({ className, country, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems='center' display='flex' flexDirection='column'>
          <Avatar className={classes.avatar} src={country.flag} />
          <Typography color='textPrimary' gutterBottom variant='h3'>
            {country.name}
          </Typography>
          <Typography color='textSecondary' variant='body1'>
            {`${country.region}, ${country.subregion}`}
          </Typography>
          <Typography
            className={classes.dateText}
            color='textSecondary'
            variant='body1'
          >
            {`Timezone ${country.timezones}`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
