import React from 'react'
import Spacer from '../Spacer'

class Step0 extends React.Component {
  
  render() {
    if (this.props.currentStep !== 0) {
      return null
    }
    return (
      <div className="form-group">
        <p className="big">
          Miso è un'associazione no profit, per entrare a farne parte ufficialmente dovrai tesserarti
        </p>
        <p>
          I passaggi richiesti sono:
        </p>
        <ol>
          <li>Inserire i tuoi dati (nome, cognome, codice fiscale ecc)</li>
          <li>
            Versare la quota di iscrizione (5€ — è un costo simbolico che coprirà l'iscrizione all'associazione per un anno)
          </li>
          <li>Miso inserirà la tua iscrizione nel nostro albo</li>
        </ol>
        <Spacer h={4} />
        <p>
          <em>
            Non ti senti pronto a prenderti l'impegno ma vuoi comunque
            sostenerci?{' '}
            <a
              // className="discretelink"
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
