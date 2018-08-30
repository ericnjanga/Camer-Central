import React, { Component } from 'react';
import AppPresentation from './AppPresentation.js';
// import { lists } from './../settings/dummy-data.js';
import settings, { FilterContext } from './../settings/basic.js';
import { toggleCollectionProperty, getCollItemByPptVal, getAllItemsOfCollByPptVal } from './../utilities/func/mix1.js';
// import logo from './logo.svg';
import './App.css';


/**
 * Terminal functions
 * (for App.js)
 * --------------------
 * --------------------
 */

// Get points based on active city and update both 'cities' and 'point'
// (In the component context)
function updateFilters(activeCity, cities, pointColl) {

  // Get points related to 'active city' (active city is set on the cloud)
  const points = pointColl.filter(point => point.cityCode===activeCity.code);

  // Save list of cities and points
  this.setState({ cities, points });

}

/**
 * Terminal functions
 * (for App.js)
 * --------------------
 * --------------------
 */


class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);

  }


  /**
   * Save active city and its connected points in the state
   */
  componentDidMount() {

    const { cities } = settings;
    const activeCity = getCollItemByPptVal(cities, 'active', true)[0];

    updateFilters.call(this, activeCity, cities, settings.points);

  }


  /**
   * Handle changes in cities
   * @param {*} event
   */
  handleChange(event) {

    const targetValue = event.target.value;
    const citiesColl = this.state.cities;
    let activeCity;
    let cities;

    for (let i = 0, l = citiesColl.length; i < l; i += 1) {

      if (citiesColl[i].title === targetValue) {

        activeCity = citiesColl[i];
        cities = toggleCollectionProperty({
          arrCollection: citiesColl,
          targetId: targetValue,
          itemIdProp: 'title',
          itemProp: 'active',
          itemVal: true,
          itemOppVal: false,
        });

      }

    }

    updateFilters.call(this, activeCity, cities, settings.points);

  } // [end] handleChange


  render() {

    if (!this.state.points || !this.state.cities) {

      return '...loading. Please wait!';

    }

    return (
      <FilterContext.Provider value={{ ...this.state }}>
        <AppPresentation
          {...this.state}
          handleChange={this.handleChange}
        />
      </FilterContext.Provider>
    );

  }

}


export default App;
