// import React, { Component } from 'react';
// import { Route, withRouter } from 'react-router-dom';
// import './App.css';

// class ScrollToTopRoute extends Component {
//   componentDidUpdate(prevProps) {
//     if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
//       window.scrollTo(0, 0)
//     }
//   }

//   render() {
//     const { component: Component, ...rest } = this.props;

//     return <Route {...rest} render={props => (<Component {...props} />)} />;
//   }
// }

// export default withRouter(ScrollToTopRoute);


import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import './App.css';

function ScrollToTopRoute({ component: Component, ...rest }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Route {...rest} render={props => <Component {...props} />} />;
}

export default ScrollToTopRoute;
