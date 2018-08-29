import React, { Component } from 'react';
import AppPresentation from './AppPresentation.js';
// import { lists } from './../settings/dummy-data.js';
import settings, { FilterContext } from './../settings/basic.js';
import { toggleCollectionProperty, getCollItemByPptVal, getAllItemsOfCollByPptVal } from './../utilities/func/mix1.js';
// import logo from './logo.svg';
import './App.css';

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

    // 1- Get active city
    const city = getCollItemByPptVal(settings.cities, 'active', true)[0];
    const points = settings.points.filter(point => point.cityCode===city.code);

    this.setState({ city, points });

  }


  /**
   * Update target value in the appropriate state property
   * @param {*} event
   */
  handleChange(event) {

    const targetName = event.target.name;
    const targetValue = event.target.value;
    // const targetType = event.target.getAttribute('data-type');
    const { filters } = this.state;
    // state[targetType][targetName] = targetValue;
    // console.log('filters =', filters);
    // console.log(`***${targetName} - ${targetValue} - ${targetType} - `);

    for (let i = 0, l = filters.length; i < l; i += 1) {

      if (filters[i].name === targetName) {

        // console.log('filters[i]', filters[i]);

        const t = toggleCollectionProperty({
          arrCollection: filters[i].data,
          targetId: targetValue,
          itemIdProp: 'value',
          itemProp: 'active',
          itemVal: true,
          itemOppVal: false,
        });

        // console.log('ffffff', t);
        filters[i].data = t;
        // filters[i].data.splice(1, i, t);

      }

    }

    this.setState({ filters });

  }


  render() {

    if (!this.state.points || !this.state.city) {

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
