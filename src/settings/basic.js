import React from 'react';

/**
 * List of cities
 * (Everything starts with cities)
 */
const cities = [
  {
    id: 1,
    type: 'city',
    title: 'Toronto',
    name: 'toronto',
    code: 'YYZ', // city's 3 letters code
    center: {
      lat: 43.653225,
      lng: -79.383186,
    },
    active: true,
  },
  {
    id: 2,
    type: 'city',
    title: 'Montreal',
    name: 'montreal',
    code: 'YUL', // city's 3 letters code
    center: {
      lat: 45.501690,
      lng: -73.567253,
    },
  },
];



/**
 * List of points
 * (Points of interest associated with a city)
 */
const points = [
  // Toronto ...
  {
    id: 0,
    name: 'Cineplex Odeon Queensway',
    title: 'Cineplex Odeon Queensway',
    images: [
      'http://photos.cinematreasures.org/production/photos/27895/1317419362/large.jpg?1317419362',
      'http://photos.cinematreasures.org/production/photos/27895/1317419362/large.jpg?1317419362',
    ],
    lat: 43.621090,
    lng: -79.515310,
    desc: '',
    type: 'biz', // business? activity?
    cityCode: 'YYZ', // city 3 letters code
    address: '1025 The Queensway, Etobicoke, ON M8Z 6C7', // physical address
    price: null, // is this something that can be purchased?
  },
  {
    id: 1,
    name: 'Fox & Fiddle',
    title: 'Fox & Fiddle',
    images: [
      'http://photos.cinematreasures.org/production/photos/27895/1317419362/large.jpg?1317419362',
      'http://photos.cinematreasures.org/production/photos/27895/1317419362/large.jpg?1317419362',
    ],
    lat: 43.763710,
    lng: -79.488520,
    desc: '',
    type: 'biz', // business? activity?
    cityCode: 'YYZ', // city 3 letters code
    address: '1285 Finch Ave W, North York, ON M3 J3J7', // physical address
    price: null, // is this something that can be purchased?
  },
  // Montreal ...
  {
    id: 0,
    name: 'Club Unity',
    title: 'Club Unity',
    images: [
      'http://clubzone.com/content/uploads/photos/fb3218639/unityhorrorstory-2015-11-08-85-360x360.jpg',
      'http://cdn.oboxeditions.com/sites/prod/files/styles/largehd/public/article/10-soirees-ou-aller-danser-ce-long-week-end-montreal-426164.jpg',
    ],
    lat: 45.513750,
    lng: -73.560460,
    desc: '',
    type: 'biz', // business? activity?
    cityCode: 'YUL', // city 3 letters code
    address: '1171 St Catherine St E, Montreal, QC H2L 2G8', // physical address
    price: null, // is this something that can be purchased?
  },
  {
    id: 1,
    name: 'Old Port of Montreal',
    title: 'Old Port of Montreal',
    images: [
      'http://clubzone.com/content/uploads/photos/fb3218639/unityhorrorstory-2015-11-08-85-360x360.jpg',
      'http://cdn.oboxeditions.com/sites/prod/files/styles/largehd/public/article/10-soirees-ou-aller-danser-ce-long-week-end-montreal-426164.jpg',
    ],
    lat: 45.499950,
    lng: -73.553460,
    desc: '',
    type: 'biz', // business? activity?
    cityCode: 'YUL', // city 3 letters code
    address: '333 Rue de la Commune O, Montréal, QC H2Y 2E2', // physical address
    price: null, // is this something that can be purchased?
  },
];





const settings = {
  points: [...points],
  cities: [...cities],
  // filters: [
  //   {
  //     id: 0,
  //     title: 'Businesses',
  //     name: 'businesses',
  //     active: true,
  //     data: [
  //       {
  //         id: 0,
  //         title: 'Lawyers',
  //         name: 'lawyers',
  //         value: 'BIZ1',
  //         active: true,
  //       },
  //       {
  //         id: 1,
  //         title: 'Real Estate Agents',
  //         name: 'real-estate-agents',
  //         value: 'BIZ2',
  //       },
  //       {
  //         id: 2,
  //         title: 'Shops',
  //         name: 'shops',
  //         value: 'BIZ3',
  //       },
  //     ],
  //   }, 
  //   {
  //     id: 2,
  //     title: 'Villes',
  //     name: 'cities',
  //     active: true,
  //     data: [
  //       {
  //         id: 1,
  //         type: 'city',
  //         title: 'Toronto',
  //         name: 'toronto',
  //         value: 'YYZ', // city's 3 letters code
  //         center: {
  //           lat: 43.653225,
  //           lng: -79.383186,
  //         },
  //         active: true,
  //       },
  //       {
  //         id: 2,
  //         type: 'city',
  //         title: 'Montreal',
  //         name: 'montreal',
  //         value: 'YUL', // city's 3 letters code
  //         center: {
  //           lat: 45.501690,
  //           lng: -73.567253,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     title: 'Activités',
  //     name: 'activites',
  //     active: true,
  //     data: [
  //       {
  //         id: 0,
  //         title: 'Parties',
  //         name: 'parties',
  //         value: 'ATV1',
  //         active: true,
  //       },
  //       {
  //         id: 1,
  //         title: 'Conferences',
  //         name: 'conferences',
  //         value: 'ATV2',
  //       },
  //       {
  //         id: 2,
  //         title: 'Activity 3',
  //         name: 'activity 3',
  //         value: 'ATV3',
  //       },
  //       {
  //         id: 3,
  //         title: 'Activity 4',
  //         name: 'activity 4',
  //         value: 'ATV4',
  //       },
  //     ],
  //   },
  // ],
}; // settings

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const FilterContext = React.createContext(settings.filter);

export default settings;
