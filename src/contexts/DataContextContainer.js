import React, { useState } from 'react';
import PropTypes from 'prop-types'

const DataContext = React.createContext(null);

export { DataContext };

const DataContextContainer = (props) => {

  const [showPochingoStars, setShowPochingoStars] = useState(false);

  return(
    <DataContext.Provider
      value={{ 
        showPochingoStars, setShowPochingoStars
      }}
    >
      { props.children }
    </DataContext.Provider>
  )
}

DataContextContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


export default DataContextContainer;
