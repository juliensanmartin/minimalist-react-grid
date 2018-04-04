import React from "react";
import { render } from "react-dom";
import Grid from "../../lib";
import "./styles.css";

const grid = {
  backgroundColor: '#FFC433'
};

const simple = {
  backgroundColor: '#335EFF',
  width: '100%',
  height: '50px'
};

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <div style={grid}>
        <Grid spacing={select('Spacing', [0, 8, 16, 24, 40], 16)}>
          <Grid spacing={select('Spacing', [0, 8, 16, 24, 40], 16)} size={8}>
            <div style={simple} size={3}>
              Grid 1 - Size 3
            </div>
            <div style={simple} size={3}>
              Grid 1 - Size 3
            </div>
            <div style={simple} size={6}>
              Grid 1 - Size 6
            </div>
          </Grid>
          <Grid spacing={select('Spacing', [0, 8, 16, 24, 40], 16)} size={4}>
            <div style={simple} size={6}>
              Grid 2 - Size 6
            </div>
            <div style={simple} size={6}>
              Grid 2 - Size 6
            </div>
            <div style={simple} size={6}>
              Grid 2 - Size 6
            </div>
            <div style={simple} size={6}>
              Grid 2 - Size 6
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
