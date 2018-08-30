import React from 'react';
import PropTypes from 'prop-types';

import Map from './../components/Map/Map.js';
import Drawer from './../components/Drawer/Drawer.js';

import ApplicationFilters from './../components/FuncAsChild/AppFilters.js';

import { getCollItemByPptVal } from './../utilities/func/mix1.js';


import { FilterContext } from './../settings/basic.js';

const AppPresentation = ({
  activeCity,
  cities,
  points,
  handleChange,
}) => {


  return (
    <div className="App">
      <Drawer
        filters1={cities}
        points={points}
        handleChange={handleChange}
      />

      <Map
        center={activeCity.center}
        points={points}
      />

      {
        // console.log('>>>>', points)
        // <FilterContext.Consumer>
        // {
        //   filters => (
        //     <React.Fragment>
        //       {
        //         console.log('...', filters)
        //       }
        //       <div style={{ position: 'fixed', bottom: '150px', padding: '10px',
        //       right: '150px', background: '#333', color: '#fff', zIndex: '1000'}}>
        //         <p>active city: { filters.city.name }</p>
        //         <p>total points: { filters.points.length }</p>
        //       </div>
        //     </React.Fragment>
        //   )
        // }
        // </FilterContext.Consumer>
      }

    </div>
  );

};




/**
 * Component props validation
 */
AppPresentation.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleChange: PropTypes.func.isRequired,
};

/**
 * Component props default values
 */
AppPresentation.defaultProps = {
};

export default AppPresentation;
