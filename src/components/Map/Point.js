import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


/**
 * UI Rendering
 */
const Point = ({
  lat,
  lng,
  text,
  classes,
}) => {

  return(
    <div className={classes.root}>
      { text }
    </div>
  );
}


const styles = theme => ({
  root: {
    position: 'fixed',
    zIndex: '3',
    height: '50px',
    width: '50px',
    background: 'orange',
  },
});


/**
 * Component props validation
 */
Point.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  // brandName: PropTypes.string.isRequired,
  // filter: PropTypes.shape({}).isRequired,
  // handleChange: PropTypes.func.isRequired,
  classes: PropTypes.shape({}),
};

/**
 * Component props default values
 */
Point.defaultProps = {
  classes: PropTypes.shape({}),
};


export default withStyles(styles)(Point);
