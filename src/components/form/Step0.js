import React from 'react'
import Spacer from '../Spacer'

class Step0 extends React.Component {
  
  render() {
    const title = 'titolo 1';
    if (this.props.currentStep !== 0) {
      return null
    }
    return (
      <div className="form-group">
        <p>
          Miso è un'associazione no profit, per entrare a farne parte sono
          necessari alcuni step
        </p>
        <p>
          Per entrare ufficialmente in Miso devi tesserarti. I passaggi
          richiesti sono:
        </p>
        <ol>
          <li>Inserire i tuoi dati (nome, cognome, codice fiscale ecc)</li>
          <li>
            Versare la quota di iscrizione (5€ — è un costo simbolico e verrà
            chiesto solo all'inizio)
          </li>
          <li>Miso inserirà la tua iscrizione nel nostro albo</li>
        </ol>
        <Spacer h={4} />
        <p>
          <em>
            Non ti senti pronto a prenderti l'impegno ma vuoi comunque
            sostenerci?{' '}
            <a
              className="discretelink"
              href="https://www.instagram.com/miso.associazione/"
              target="_blank"
              rel="noreferrer"
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
