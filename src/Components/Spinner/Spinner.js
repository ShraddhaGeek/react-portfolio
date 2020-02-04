import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  progress: {
      margin: theme.spacing.unit*3,
      marginTop: theme.spacing.unit*12,
    color: theme.palette.text.secondary,
  },
});

const CircularIndeterminate = (props) => {
  const { classes } = props;

  return (
    <div>
      <CircularProgress size={64} className={classes.progress} />
    </div>
  );
}

export default withStyles(styles)(CircularIndeterminate);
