import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
} from "@material-ui/core";

import { Search as SearchIcon } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
  searchButton: {
    width: 500,
    marginInline: theme.spacing(2),
  },
}));

const Toolbar = ({ className, setsearch, search, ...rest }) => {
  const classes = useStyles();
  const editSearch = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box display='flex' justifyContent='flex-end'>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SvgIcon fontSize='small' color='action'>
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                value={search}
                placeholder='Search for any country'
                variant='outlined'
                onChange={(e) => editSearch(e)}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

export default Toolbar;
