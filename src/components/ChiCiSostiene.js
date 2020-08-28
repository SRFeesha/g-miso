import React from 'react'
import Spacer from './Spacer'
import Grid from '@material-ui/core/Grid'
import Calabrone from '../img/socialProof/logo_calab.png'
import Comune from '../img/socialProof/logo_comune.png'
import Musei from '../img/socialProof/logo_fbm.png'
import Fondazione from '../img/socialProof/logo_fcb.png'

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
        <div className="sponsor-parent">
          <img src={Fondazione} alt="logo sponsor miso" />
        </div>
        <div className="sponsor-parent">
          <img src={Comune} alt="logo sponsor miso" />
        </div>
        <div className="sponsor-parent">
          <img src={Musei} alt="logo sponsor miso" />
        </div>
        <div className="sponsor-parent">
          <img src={Calabrone} alt="logo sponsor miso" />
        </div>
      </Grid>
      <Spacer h={11} />
    </div>
  )
}

export default ChiCiSostiene
