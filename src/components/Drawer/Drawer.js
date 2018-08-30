import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PreviewPoint from './../../terminals/PreviewPoint.js';
import StarIcon from '@material-ui/icons/Star';

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
    <div className={`app-sidebar ${classes.root}`}>
      <section className="app-sidebar__section">
        <h2 className={classes.brand}>
          <StarIcon className={classes.brandIcon} />
          { appText.brandName }
        </h2>
      </section>


      <section className="app-sidebar__section">
        <DropdownSelector
          list={filters1}
          title="Cities"
          name="Cities"
          type="filters"
          value={ getDefaultVal(filters1, 'title') }
          handleChange={handleChange}
          className={classes.brand}
        />
      </section>

      <section className="app-sidebar__section">
        {
          points.map(point => <PreviewPoint key={point.id} {...point} />)
        }
      </section>



      <section className="app-sidebar__section" style={{ border: '3px solid lime', padding: '10px'}}>
 
        <h3>Nice Steps</h3>
        <ul>
          <li>
            Create <a target="_blank" href="http://google-map-react.github.io/google-map-react/map/balderdash">this interraction</a> | <a href="https://github.com/google-map-react/old-examples/blob/master/web/flux/components/examples/x_main/main_map_block.jsx" target="_blank">Code source</a>
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
      </section>
      

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
    background: '#216728',
    // ...theme.mixins.gutters(),

    textAlign: 'left',
    padding: theme.spacing.unit * 4,
    // paddingBottom: theme.spacing.unit * 4,
    // maxWidth: '400px',
  },
  brandIcon: {
    position: 'relative',
    top: '12px',
    marginRight: '5px',
    color: '#f9ff00',
    fontSize: '50px',
  },
  brand: {
    color: '#fff',
    textTransform: 'uppercase',
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
