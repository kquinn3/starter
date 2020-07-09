import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  user: { isLoggedIn },
  component: Component,
  ...rest
}) => {
  console.log('In private route, isLoggedIn', isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedIn ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(PrivateRoute);
