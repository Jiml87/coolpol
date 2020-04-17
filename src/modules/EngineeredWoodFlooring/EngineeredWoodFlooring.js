import React, { Component } from 'react';
import styles from './EngineeredWoodFlooring.module.scss';


class EngineeredWoodFlooring extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>EngineeredWoodFlooring</span>
      </div>
    );
  }
}

export default EngineeredWoodFlooring