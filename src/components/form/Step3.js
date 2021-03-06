import React from 'react'
import style from './MasterForm.module.css'

class Step3 extends React.Component {
  render() {
    const {
      currentStep,
      name,
      surname,
      email,
      privacy,
      cell,
      cf,
      city,
      address,
      birth,
      born,
    } = this.props.state
    // Usinga custom variable because the value is true or false — and I want to show an italian string
    let privacyLabel = ''

    if (currentStep !== 3) {
      return null
    }

    privacy === true
      ? (privacyLabel = 'Accettata')
      : (privacyLabel = 'Non accettata')

    return (
      <div className="form-group">
        <p>
          Ti invitiamo a controllare un attimo i dati inseriti. Se ti rendi
          conto che c'è qualcosa di sbagliato puoi modificarli cliccando su
          indietro.
        </p>
        <div className={style.riepilogo}>
          <p>Nome: </p>
          <p>{name}</p>

          <p>Cognome: </p>
          <p>{surname}</p>

          <p>Comune di residenza: </p>
          <p>{city}</p>

          <p>Indirizzo di residenza: </p>
          <p>{address}</p>

          <p>Nato il: </p>
          <p>{birth}</p>

          <p>Nato a: </p>
          <p>{born}</p>

          <p>E-Mail: </p>
          <p>{email}</p>

          <p>Cellulare: </p>
          <p>{cell}</p>

          <p>Codice fiscale: </p>
          <p>{cf}</p>

          <p>Consenso alla privacy: </p>
          <p>{privacyLabel}</p>
        </div>
      </div>
    )
  }
}

export default Step3
