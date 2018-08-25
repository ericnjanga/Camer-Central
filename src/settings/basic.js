import React from 'react';

const settings = {
  filters: [
    {
      id: 0,
      title: 'Activités',
      name: 'activites',
      data: [
        {
          id: 0,
          title: 'Activity 1',
          name: 'activity 1',
          value: 'ATV1',
          active: true,
        },
        {
          id: 1,
          title: 'Activity 2',
          name: 'activity 2',
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
      id: 1,
      title: 'Villes',
      name: 'cities',
      data: [
        {
          id: 1,
          title: 'Toronto',
          name: 'toronto',
          value: 'YYZ', // city's 3 letters code
          lat: 43.653225,
          lng: -79.383186,
          active: true,
        },
        {
          id: 2,
          title: 'Montreal',
          name: 'montreal',
          value: 'YUL', // city's 3 letters code
          lat: 45.501690,
          lng: -73.567253,
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
