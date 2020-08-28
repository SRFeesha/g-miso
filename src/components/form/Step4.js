import React from 'react'

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 4) {
      // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <p className="big">
          La tua richiesta di iscrizione è stata consegnata alla Miso 🥳
        </p>
        <p>Ecco cosa succederà adesso:</p>
        <ol>
          <li>
            Verrai contattato via mail nei prossimi giorni da uno dei membri
            della Miso che ti seguirà passo passo nella richiesta di iscrizione
            all'associzione.
          </li>
          <li>
            Ti verrà chiesto di effettuare un versamento simbolico di 5€ (prezzo
            di iscrizione all'associazione per un anno).
          </li>
          <li>
            Ricevuto il pagamento, il consiglio di amministrazione potrà
            procedere ad aggiungerti a tutti gli effetti tra i membri della Miso
            APS.
          </li>
        </ol>
      </div>
    )
  }
}

export default Step3
