import React from "react";
import Logo from './Logo'
import Spacer from './Spacer'
import Grid from '@material-ui/core/Grid';

// !!!!
// Da mettere come callout
const ChiCiSostiene = (props) => {
  return (
    <div>
      <Spacer h="15rem" />
      <h3 class="text-center">Chi ci sostiene</h3>
      <Spacer h="3rem" />
      <Grid 
        container 
        direction="row" 
        justify="space-evenly" 
        alignItems="flex-start"
      >
        <Logo logo="https://source.unsplash.com/random/100x50"/>
        <Logo logo="https://source.unsplash.com/random/100x50"/>
        <Logo logo="https://source.unsplash.com/random/100x50"/>
        <Logo logo="https://source.unsplash.com/random/100x50"/>
      </Grid>
      <Spacer h="6rem" />
    </div>
  );
};

export default ChiCiSostiene;
