import React, { Component } from 'react';
import styles from './Login.module.scss';


class Login extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>Login</span>
    );
  }
}

export default Login
