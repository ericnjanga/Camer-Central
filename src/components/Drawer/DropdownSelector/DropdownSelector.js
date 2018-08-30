import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';


/**
 * UI Rendering
 */
const DropdownSelector = ({
  list,
  title,
  name,
  type,
  value,
  handleChange,
  classes,
  className,
}) => {

  return(
    <div styles={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={name}>{title}</InputLabel>
        <Select
          className={className}
          native
          value={value}
          onChange={handleChange}
          inputProps={{
            name: `${name}`,
            id: `${name}`,
            'data-type': `${type}`,
          }}
        >
          {
            list.map((item) => {
              return (<option
                key={item.id}
                value={item.value}
              >
                {item.title}
              </option>)
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    border: '40px solid lime',
  },
  formControl: {
    margin: `${theme.spacing.unit}px 0`,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


/**
 * Component props validation
 */
DropdownSelector.propTypes = {
  // activity: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classes: PropTypes.shape({}),
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

/**
 * Component props default values
 */
DropdownSelector.defaultProps = {
  classes: PropTypes.shape({}),
};

export default withStyles(styles)(DropdownSelector);

