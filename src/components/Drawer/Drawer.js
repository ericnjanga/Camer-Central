import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PreviewPoint from './../../terminals/PreviewPoint.js';

import DropdownSelector from './DropdownSelector/DropdownSelector.js';

import { appText } from './../../settings/dummy-data.js';

/**
 * UI Rendering
 */
const Drawer = ({ //DrawerPresentation
  filters1,
  // brandName,
  points,
  handleChange,
  classes,
}) => {

  return (
    <div className={classes.root}>
      <h2 className={classes.brand}>
        { appText.brandName }
      </h2>


      <DropdownSelector
        list={filters1}
        title="Cities"
        name="Cities"
        type="filters"
        value={ getDefaultVal(filters1, 'title') }
        handleChange={handleChange}
      />

      {
        points.map(point => <PreviewPoint key={point.id} {...point} />)
      }


      <div style={{ border: '3px solid lime', marginTop: '100px', padding: '10px'}}>
        <h3>Nice Dev Examples</h3>
        <ul>
          <li>
            <a target="_blank" href="http://google-map-react.github.io/google-map-react/map/balderdash">example 1</a>
          </li>
        </ul>

        <ul>
          <li>Featured advertising (based on user selection)</li>
          <li>Contact Us</li>
        </ul>

        <h3>Central Market place</h3>
        <ul>
          <li>
            Selling background images for (web, mobile)
          </li>
        </ul>
      </div>
      

    </div>
  );
};


const getDefaultVal = (list, ppt) => {
  return list.filter(item => item.active)[0][ppt];
}


const styles = theme => ({
  root: {
    position: 'fixed',
    zIndex: '2',
    top: '0',
    left: '0',
    width: '50%',
    height: '100%',
    maxWidth: '400px',
    color: '#fff',
    background: '#4688F1',
    // ...theme.mixins.gutters(),

    textAlign: 'left',
    padding: theme.spacing.unit * 4,
    // paddingBottom: theme.spacing.unit * 4,
    // maxWidth: '400px',
  },
  brand: {
    color: 'lime',
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
Drawer.propTypes = {
  // brandName: PropTypes.string.isRequired,
  // filter: PropTypes.shape({}).isRequired,
  // lists: PropTypes.shape({}).isRequired,
  // formActive: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  // spacing: PropTypes.string,
  classes: PropTypes.shape({}),
};

/**
 * Component props default values
 */
Drawer.defaultProps = {
  classes: PropTypes.shape({}),
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


export default withStyles(styles)(Drawer);
