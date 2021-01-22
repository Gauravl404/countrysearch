import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Activity = ({ className, country, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title='Map' />
      <Divider />
      <CardContent>
        <Box height={600} position='relative'>
          Unable to load map
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

Activity.propTypes = {
  className: PropTypes.string,
};

export default Activity;
