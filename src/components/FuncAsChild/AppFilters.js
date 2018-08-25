import React from 'react';
import settings from './../../settings/basic.js';

const AppFilters = ({
  children,
}) => {

  if (!children) {

    return false;

  }

  return (
    <div>
      { children(settings.filters) }
    </div>
  );

};

export default AppFilters;
