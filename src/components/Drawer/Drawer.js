import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DropdownSelector from './DropdownSelector/DropdownSelector.js';

import { appText } from './../../settings/dummy-data.js';

/**
 * UI Rendering
 */
const Drawer = ({ //DrawerPresentation
  // brandName,
  data,
  filter,
  handleChange,
  classes,
}) => {

  return (
    <div className={classes.root}>
      <h2 className={classes.brand}>
        { appText.brandName }
      </h2>

      {

console.log('data=', data)
      }

      {
        data.map(dt => {
          return (
            <DropdownSelector
              key={dt.id}
              title={dt.title}
              name={dt.name}
              type="filters"
              value={ getDefaultVal(dt.data)[0].value }
              list={dt.data}
              handleChange={handleChange}
            />
          )
        })
      }


      {/* <DropdownSelector
        title="Activités"
        name="activity"
        type="filter"
        value={ getDefaultVal(lists.activities)[0].value }
        list={lists.activities}
        handleChange={handleChange}
      /> */}

      {/* 

      <DropdownSelector
        title="Villes"
        name="city"
        type="filter"
        value={ getDefaultVal(lists.cities)[0].value }
        list={lists.cities}
        handleChange={handleChange}
      /> */}

      <ul>
        <li>Featured advertising (based on user selection)</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};


const getDefaultVal = (list) => {
  console.log('list=', list);
  return list.filter(item => item.active);
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
