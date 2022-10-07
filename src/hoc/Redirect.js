import React from "react";
import { Navigate } from "react-router-dom";

import { getToken } from "../utils";

const Redirect = (ComposedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
      };
    }

    // UNSAFE_componentWillMount() {
    //   const token = getToken();

    //   if (token) {
    //     this.setState({ isLoggedIn: true });
    //   } else {
    //     this.setState({ isLoggedIn: false });
    //   }
    // }

    render() {
      const isLoggedIn = this.state.isLoggedIn;
      return !isLoggedIn ? (
        <ComposedComponent {...this.props} />
      ) : (
        <Navigate to="/" />
      );
    }
  };
};
export default Redirect;
