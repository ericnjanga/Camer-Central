import React from 'react';

const settings = {
  filters: [
    /*
    {
      id: 0,
      title: 'Businesses',
      name: 'businesses',
      active: true,
      data: [
        {
          id: 0,
          title: 'Lawyers',
          name: 'lawyers',
          value: 'BIZ1',
          active: true,
        },
        {
          id: 1,
          title: 'Real Estate Agents',
          name: 'real-estate-agents',
          value: 'BIZ2',
        },
        {
          id: 2,
          title: 'Shops',
          name: 'shops',
          value: 'BIZ3',
        },
      ],
    },
    */
    {
      id: 1,
      title: 'Activités',
      name: 'activites',
      active: true,
      data: [
        {
          id: 0,
          title: 'Parties',
          name: 'parties',
          value: 'ATV1',
          active: true,
        },
        {
          id: 1,
          title: 'Conferences',
          name: 'conferences',
          value: 'ATV2',
        },
        {
          id: 2,
          title: 'Activity 3',
          name: 'activity 3',
          value: 'ATV3',
        },
        {
          id: 3,
          title: 'Activity 4',
          name: 'activity 4',
          value: 'ATV4',
        },
      ],
    },
    {
      id: 2,
      title: 'Villes',
      name: 'cities',
      active: true,
      data: [
        {
          id: 1,
          title: 'Toronto',
          name: 'toronto',
          value: 'YYZ', // city's 3 letters code
          center: {
            lat: 43.653225,
            lng: -79.383186,
          },
          active: true,
        },
        {
          id: 2,
          title: 'Montreal',
          name: 'montreal',
          value: 'YUL', // city's 3 letters code
          center: {
            lat: 45.501690,
            lng: -73.567253,
          },
        },
      ],
    },
  ],
  // filter: {
  //   activity: lists.activities[0].value,
  //   city: lists.cities[0].value,
  // },
};

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const FilterContext = React.createContext(settings.filter);

export default settings;
