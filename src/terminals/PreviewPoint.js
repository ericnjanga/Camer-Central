import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const PreviewPoint = ({
  classes,
  title,
}) => {

  return(
    <Paper className={`preview-point ${classes.root}`} elevation={1}>
      {title}
    </Paper>
  );

};


export default withStyles(styles)(PreviewPoint);
