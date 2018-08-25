import React from 'react';
import PropTypes from 'prop-types';

import Map from './../components/Map/Map.js';
import Drawer from './../components/Drawer/Drawer.js';

import ApplicationFilters from './../components/FuncAsChild/AppFilters.js';


import { FilterContext } from './../settings/basic.js';

const AppPresentation = ({
  filters,
  handleChange,
}) => {

  return (
    <div className="App">
      <Drawer
        data={filters}
        handleChange={handleChange}
      /> 
  
      <Map />

      {
      //   <ApplicationFilters>
      //   {
      //     (filters) => {
      //       return (
              
      //       )
      //     }
      //   }
      // </ApplicationFilters>
      }


      <FilterContext.Consumer>
        {
          filters => (
            <div style={{ position: 'fixed', bottom: '150px', padding: '10px',
            right: '150px', background: '#333', color: '#fff', zIndex: '1000'}}>
              <p>filter 1: { filters[0].name }</p>
              <p>filter 2: { filters[1].name }</p>
            </div>
          )
        }
      </FilterContext.Consumer>

    </div>
  );

};


/**
 * Component props validation
 */
AppPresentation.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

/**
 * Component props default values
 */
AppPresentation.defaultProps = {
};

export default AppPresentation;
