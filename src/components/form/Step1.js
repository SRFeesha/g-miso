import React from 'react'
import style from './MasterForm.module.css'
import Spacer from '../Spacer'

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null
    }
    return (
      <div className="form-group">
        <input type="hidden" name="form-name" value="uniscitiANoi" />
        <input type="hidden" name="netlify-honeypot" value="bot-field" />

        <label htmlFor="name">Nome</label>
        <input
          className="form-control"
          id="name"
          name="name"
          type="text"
          placeholder="Mario"
          value={this.props.name}
          onChange={this.props.handleChange}
          required
        />

        <label htmlFor="surname">Cognome</label>
        <input
          className="form-control"
          id="surname"
          name="surname"
          type="text"
          placeholder="Rossi"
          value={this.props.surname}
          onChange={this.props.handleChange}
        />

        <label htmlFor="email">E-mail</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="email"
          placeholder="mario.rossi@gmail.com"
          value={this.props.email}
          onChange={this.props.handleChange}
        />

        <label htmlFor="cell">Cellulare</label>
        <input
          className="form-control"
          id="cell"
          name="cell"
          type="tel"
          placeholder="333 123 1234"
          inputmask="'mask': '999 999 9999'"
          value={this.props.cell}
          onChange={this.props.handleChange}
        />

        <Spacer h={4} />
        <div className={style.terms}>
          <input
            className="checkbox"
            id="privacy"
            name="privacy"
            type="checkbox"
            value={this.props.privacy}
            defaultChecked={this.props.privacy}
            onClick={this.props.handleChange}
          />
          <label htmlFor="privacy" className={style.privacy}>
            Ai sensi del D.Lgs 196/2003 Io sottoscritto/a {this.props.name}{' '}
            offro il mio consenso al trattamento dei dati personali per le
            attività dell’Associazione.
          </label>
        </div>
      </div>
    )
  }
}

export default Step1
