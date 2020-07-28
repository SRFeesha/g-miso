import React from "react";
import Spacer from "./Spacer";
import Grid from "@material-ui/core/Grid";
import DonaStyle from "./dona.module.css";
import { Button } from "@material-ui/core";
import PayPalIcon from "../img/paypal_logo.svg";

import { Icon } from "@material-ui/core";

const Dona = () => {
  return (
    <div class="full-bleed">
      <div className={DonaStyle.pattern}>
        <div className={DonaStyle.content}>
          <p class="giant">
            I nostri eventi sono completamente gratuiti. Siamo un’Associazione
            no-profit e in quanto tale ci sosteniamo con le donazioni di sponsor
            e privati. Aiutaci a crescere.
          </p>
          <Button variant="contained" size="large" className={DonaStyle.dona}>
            <Icon>
              <img src={PayPalIcon} height={25} width={25} />
            </Icon>
            Aiutaci con una donazione
          </Button>
          <p>
            Tutti i fondi sono investiti in scenografie, costumi, attrezzature
            da cinema e affitto di teatri.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dona;
