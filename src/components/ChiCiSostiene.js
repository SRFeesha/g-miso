import React from "react";
import Logo from './Logo'
import Spacer from './Spacer'
import Grid from '@material-ui/core/Grid';
import Calabrone from '../img/socialProof/logo_calab.png'
import Comune from '../img/socialProof/logo_comune.png'
import Musei from '../img/socialProof/logo_fbm.png'
import Fondazione from '../img/socialProof/logo_fcb.png'

// !!!!
// Da mettere come callout
const ChiCiSostiene = (props) => {
  return (
    <div>
      <Spacer h={13} />
      <h3 className="text-center">Chi ci sostiene</h3>
      <Spacer h={8} />
      <Grid 
        container 
        direction="row" 
        justify="space-evenly" 
        alignItems="flex-start"
      >
        <Logo w="134px" logo={Fondazione} />
        <Logo w="134px" logo={Comune} />
        <Logo w="134px" logo={Musei} />
        <Logo w="134px" logo={Calabrone} />
      </Grid>
      <Spacer h={11} />
    </div>
  );
};

export default ChiCiSostiene;
