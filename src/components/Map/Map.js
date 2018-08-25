import React from 'react';
import PropTypes from 'prop-types';
import MapPresentation from './MapPresentation.js';


/**
 * Component logic
 */
class Map extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      defaultProps: {
        center: {
          // lat: 59.95,
          // lng: 30.33,

          lat: 43.653225,
          lng: -79.383186,
        },
        zoom: 14,
      }
    };

  }

  // componentDidMount() {

  // }

  render() {

    return(
      <MapPresentation
        {...this.state.defaultProps}
      />
    );

  }
}


/**
 * Component props validation
 */
Map.propTypes = {
  // name: PropTypes.string,
  // formActive: PropTypes.bool,
  // handleChange: PropTypes.func.isRequired,
  // spacing: PropTypes.string,
  // style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
Map.defaultProps = {
  // name: '',
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


export default Map;