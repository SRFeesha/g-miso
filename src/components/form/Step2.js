import React from 'react'

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h3>Conferma i tuoi dati</h3>
        <p>
          Ti invitiamo a controllare un attimo i dati inseriti. Se ti rendi conto che c'è qualcosa di sbagliato puoi modificarli cliccando su indietro.
        </p>
        <p>{this.props.state.name}</p>
        <p>{this.props.state.city}</p>
        <p>{this.props.state.address}</p>
        <p>{this.props.state.birth}</p>
        <p>{this.props.state.born}</p>
        <p>{this.props.state.email}</p>
        <p>{this.props.state.cell}</p>
        <p>{this.props.state.privacy}</p>
      </div>
    )
  }
}

export default Step2
