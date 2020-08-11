import React from "react";

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h3>Tutto è andato a buon fine!</h3>
        <p>Inviare una mail di conferma con i propri dati</p>
        <p>Dire che verrà contattato nella prossima settimana, ma più probabilmente entro qualche ora</p>
      </div>
    );
  }
}

export default Step3;
