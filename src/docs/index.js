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
      <h1>Demo Grid</h1>
      <GreenGrid spacing={16}>
        <img 
          width="100%" 
          height="100%"
          src="https://cdn.pixabay.com/photo/2016/11/23/01/18/adorable-1851661_1280.jpg" 
          size={6}/>
        <img 
          width="100%" 
          height="100%"
          src="https://cdn.pixabay.com/photo/2017/12/26/16/09/lion-3040797_1280.jpg" 
          size={4}/>
        <img 
          width="100%" 
          height="100%"
          src="https://cdn.pixabay.com/photo/2017/11/06/09/53/animal-2923186_1280.jpg" 
          size={2}/>
        <img 
          width="100%" 
          height="100%"
          size={12}
          src="https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035_1280.jpg"/>
        <img 
          width="100%" 
          height="100%"
          src="https://c.pxhere.com/photos/e4/81/hedgehog_animal_baby_cute_small_pet-932170.jpg!d" 
          size={4}/>
        <img 
          width="100%" 
          height="100%"
          src="https://cdn.pixabay.com/photo/2018/03/23/07/21/swan-3252871_1280.jpg" 
          size={4}/>
        <img 
          width="100%" 
          height="100%"
          src="https://cdn.pixabay.com/photo/2017/04/30/18/33/cat-2273598_1280.jpg" 
          size={4}/>
      </GreenGrid>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
