import React from "react";
import style from "./MasterForm.module.css";

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }

    // I use a custom variable because the value is true or false — and I want to show an italian string
    let privacy = "";
    this.props.state.privacy === true
      ? (privacy = "Accettata")
      : (privacy = "Non accettata");

    return (
      <div className="form-group">
        <p>
          Ti invitiamo a controllare un attimo i dati inseriti. Se ti rendi
          conto che c'è qualcosa di sbagliato puoi modificarli cliccando su
          indietro.
        </p>
        <div className={style.riepilogo}>
          <p>Nome: </p>
          <p>{this.props.state.name}</p>
          <p>Comune di residenza: </p>
          <p>{this.props.state.city}</p>
          <p>Indirizzo di residenza: </p>
          <p>{this.props.state.address}</p>
          <p>Nato il: </p>
          <p>{this.props.state.birth}</p>
          <p>Nato a: </p>
          <p>{this.props.state.born}</p>
          <p>E-Mail: </p>
          <p>{this.props.state.email}</p>
          <p>Cellulare: </p>
          <p>{this.props.state.cell}</p>
          <p>Consenso alla privacy: </p>
          <p>{privacy}</p>
        </div>
      </div>
    );
  }
}

export default Step2;
