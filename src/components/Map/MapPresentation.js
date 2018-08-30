import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Point from './Point.js';
import GoogleMapReact from 'google-map-react';
import { googleMap } from './../../settings/dummy-data';


/**
 * UI Rendering
 */
const MapPresentation = ({
  center,
  points,
  zoom,
  classes,
}) => {

  return(
    // Important! Always set the container height explicitly
    <div className={classes.root}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMap.apiKey }}
        // defaultCenter={center}
        center={center}
        defaultZoom={zoom}
      >
        {
          points.map((point) => {
            return <Point
                    key={point.id}
                    lat={point.lat}
                    lng={point.lng}
                    text={point.title}
                  />
          })
        }
        
      </GoogleMapReact>
    </div>
  );
}


const styles = theme => ({
  root: {
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    background: 'green',
    // ...theme.mixins.gutters(),
    // paddingBottom: theme.spacing.unit * 4,
    // maxWidth: '400px',
  },

  // textField: {
  //   marginLeft: theme.spacing.unit,
  //   marginRight: theme.spacing.unit,
  //   width: `calc(100% - ${theme.spacing.unit * 2}px)`,
  // },
});


/**
 * Component props validation
 */
MapPresentation.propTypes = {
  center: PropTypes.shape({}).isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  zoom: PropTypes.number.isRequired,
  // formActive: PropTypes.bool,
  // handleChange: PropTypes.func.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  // spacing: PropTypes.string,
  // style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
MapPresentation.defaultProps = {
  // formActive: true,
  // spacing: '16',
  // style: { // Default styles
  //   container: {
  //     position: 'fixed',
  //     width: '100%',
  //     height: '100%',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //     zIndex: '20',
  //   },
  // },
};


export default withStyles(styles)(MapPresentation);
