import React from "react";
import DonaStyle from "./Dona.module.css";
import Button from "./Button";
import PayPalIcon from "../img/paypal_logo.svg";

const Dona = () => {
  return (
    <div className="full-bleed">
      <div className={DonaStyle.pattern}>
        <div className={DonaStyle.content}>
          <p className="giant">
            I nostri eventi sono completamente gratuiti. Siamo un’Associazione
            no-profit e in quanto tale ci sosteniamo con le donazioni di sponsor
            e privati. Aiutaci a crescere.
          </p>
          <Button className={DonaStyle.dona}>
            <img src={PayPalIcon} alt="PayPal icon" height={28} width={28} />
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
