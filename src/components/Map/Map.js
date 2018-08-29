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
      zoom: 12, //14,
    };

  }

  componentDidMount() {
    console.log('?????',this.props);
  }


  // componentDidUpdate(prevProps, prevState, snapshot) {

  //   console.log('-componentDidUpdate=', prevProps, prevState, snapshot);

  // }

  render() {

    return (
      <MapPresentation
        {...this.props.city}
        points={this.props.points}
        {...this.state}
      />
    );

  }
}


/**
 * Component props validation
 */
Map.propTypes = {
  city: PropTypes.PropTypes.shape({}).isRequired,
  // city: PropTypes.PropTypes.shape({}),
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
