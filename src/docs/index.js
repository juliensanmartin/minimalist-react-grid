import React from "react";
import { render } from "react-dom";
import Grid from "../../lib";
import styled from "styled-components";
import "./styles.css";

const simple = {
  backgroundColor: '#335EFF',
  width: '100%',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const OrangeDiv = styled(Grid)`
  background-color: #FFC433;
`;

const RedGrid = styled(Grid)`
  background-color: red;
`;

const GreenGrid = styled(Grid)`
  background-color: green;
`;

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <OrangeDiv spacing={16}>
        <RedGrid spacing={16} size={8}>
          <div style={simple} size={3}>
            Grid 1 - Size 3
          </div>
          <div style={simple} size={3}>
            Grid 1 - Size 3
          </div>
          <div style={simple} size={6}>
            Grid 1 - Size 6
          </div>
        </RedGrid>
        <GreenGrid spacing={16} size={4}>
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
        </GreenGrid>
      </OrangeDiv>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
