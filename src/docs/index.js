import React from "react";
import { render } from "react-dom";
import Grid from "../../lib";
import styled from "styled-components";
import "./styles.css";

const simple = {
  backgroundColor: '#00A451',
  color: '#381D2A',
  width: '100%',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const OrangeDiv = styled(Grid)`
  background-color: #3E3C72;
`;

const RedGrid = styled(Grid)`
  background-color: #ED3237;
`;

const GreenGrid = styled(Grid)`
  background-color: #F4D23A;
`;

function Demo() {
  return (
    <div>
      <h1>Demo Nested Grids</h1>
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
