import React from "react";
import { render } from 'react-dom';
import Grid from '../lib';
import styles from './styles.css';

function Demo() {
  return (
    <div>
      <h1 className={styles.title}>minimalist-react-grid</h1>
      <h2>Installation</h2>
      <div className={styles.code}>npm install minimalist-react-grid --save</div>
      <h2>Demo</h2>
      <Grid spacing={16}>
        <div className={styles.card} size={3} />
        <div className={styles.card} size={2} />
        <div className={styles.card} size={2} />
        <div className={styles.card} size={2} />
        <div className={styles.card} size={3} />
        <div className={styles.card} size={6} />
        <div className={styles.card} size={6} />
        <div className={styles.card} size={12} />
      </Grid>
      <h2>Nested</h2>
      <Grid className={styles.blue} spacing={16}>
        <Grid className={styles.red} spacing={16} size={8}>
          <div className={styles.card} size={3}>
            Grid 1 - Size 3
          </div>
          <div className={styles.card} size={3}>
            Grid 1 - Size 3
          </div>
          <div className={styles.card} size={6}>
            Grid 1 - Size 6
          </div>
        </Grid>
        <Grid className={styles.yellow} spacing={16} size={4}>
          <div className={styles.card} size={6}>
            Grid 2 - Size 6
          </div>
          <div className={styles.card} size={6}>
            Grid 2 - Size 6
          </div>
          <div className={styles.card} size={6}>
            Grid 2 - Size 6
          </div>
          <div className={styles.card} size={6}>
            Grid 2 - Size 6
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
