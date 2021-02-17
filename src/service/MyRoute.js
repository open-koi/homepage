import React from 'react'
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import PageLayout from 'layouts';

const MyRoute = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={(props) => (
      <PageLayout><Component {...props} /></PageLayout>
    )} />
  )
}

// MyRoute.propTypes = {
//   component: PropTypes.func.isRequired,
// };

export default MyRoute;
