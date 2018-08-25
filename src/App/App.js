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
      filters: [...settings.filters],
      // filter: {
      //   ...settings.filter,
      // },
      // lists: { ...lists },
    };
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {

  }


  /**
   * Update target value in the appropriate state property
   * @param {*} event
   */
  handleChange(event) {

    const targetName = event.target.name;
    const targetValue = event.target.value;
    const targetType = event.target.getAttribute('data-type');
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

    return (
      <FilterContext.Provider value={ getAllItemsOfCollByPptVal(this.state.filters, 'data', 'active', true)}>
        <AppPresentation
          {...this.state}
          handleChange={this.handleChange}
        />
      </FilterContext.Provider>
    );

  }

}

export default App;
