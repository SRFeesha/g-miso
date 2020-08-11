import React from 'react'
import Spacer from '../Spacer'

class Step0 extends React.Component {
  render() {
    if (this.props.currentStep !== 0) {
      return null
    }
    return (
      <div className="form-group">
        <h2>Come entrare a fare parte di Miso</h2>
        <Spacer h={4} />
        <p>
          Miso è un'associazione no profit, per entrare a farne parte sono
          necessari alcuni step
        </p>
        <p>
          Per entrare ufficialmente in Miso devi tesserarti. I passaggi
          richiesti sono:
          <ol>
            <li>Inserire i tuoi dati (nome, cognome, codice fiscale ecc)</li>
            <li>
              Versare la quota di iscrizione (5€ — è un costo simbolico e verrà
              chiesto solo all'inizio)
            </li>
            <li>Miso inserirà la tua iscrizione nel nostro albo</li>
          </ol>
        </p>
        <Spacer h={4} />
        <p>
          <em>
            Non ti senti pronto a prenderti l'impegno ma vuoi comunque
            sostenerci?{' '}
            <a
              className="discretelink"
              href="https://www.instagram.com/miso.associazione/"
              target="_blank"
            >
              Seguici su Instagram!
            </a>
          </em>
        </p>
      </div>
    )
  }
}

export default Step0
