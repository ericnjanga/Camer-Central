// import React from 'react';
// import PropTypes from 'prop-types';
// import DrawerPresentation from './DrawerPresentation.js';
// import { appText, lists } from './../../settings/dummy-data.js';


// /**
//  * Component logic
//  */
// class Drawer extends React.Component {

//   constructor(props) {

//     super(props);
//     // this.state = {
//     //   filter: {
//     //     activity: '',
//     //     city: '',
//     //   },
//     //   lists: { ...lists },
//     // };
//     // this.handleChange = this.handleChange.bind(this);

//   }

//   componentDidMount() {

//   }


//   /**
//    * Update target value in the appropriate state property
//    * @param {*} event 
//    */
//   // handleChange(event) {

//   //   const targetName = event.target.name;
//   //   const targetValue = event.target.value;
//   //   const targetType = event.target.getAttribute('data-type');
//   //   const { state } = this;
//   //   state[targetType][targetName] = targetValue;
//   //   this.setState({ state });

//   //   // console.log(`${targetName} - ${targetValue} - ${targetType} - `);

//   // }

//   render() {

//     return (
//       <DrawerPresentation
//         {...this.state}
//         brandName={appText.brandName}
//         handleChange={this.handleChange}
//       />
//     );

//   }
// }


// /**
//  * Component props validation
//  */
// Drawer.propTypes = {
//   // name: PropTypes.string,
//   // formActive: PropTypes.bool,
//   // handleChange: PropTypes.func.isRequired,
//   // spacing: PropTypes.string,
//   // style: PropTypes.shape({}),
// };

// /**
//  * Component props default values
//  */
// Drawer.defaultProps = {
//   // name: '',
//   // formActive: true,
//   // spacing: '16',
//   // style: { // Default styles
//   //   container: {
//   //     position: 'fixed',
//   //     width: '100%',
//   //     height: '100%',
//   //     display: 'flex',
//   //     justifyContent: 'center',
//   //     alignItems: 'center',
//   //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   //     zIndex: '20',
//   //   },
//   // },
// };


// export default Drawer;
