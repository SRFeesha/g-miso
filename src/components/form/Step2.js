import React from "react";

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h3>Inserisci i tuoi dati di pagamento</h3>
        <p>O magari per il momento gli diciamo semplicemente che sarà fatto tutto via mail</p>        
      </div>
    );
  }
}

export default Step2;
