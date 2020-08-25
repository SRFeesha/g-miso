import React from "react";
import style from "./MasterForm.module.css";

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div className="form-group">
        <label htmlFor="name">Nome Completo</label>
        <input
          className="form-control"
          id="name"
          name="name"
          type="text"
          placeholder="Mario Rossi"
          value={this.props.name} 
          onChange={this.props.handleChange} // Prop: Puts data into state
        />

        <label htmlFor="city">Comune di Residenza</label>
        <input
          className="form-control"
          id="city"
          name="city"
          type="text"
          placeholder="Roma"
          value={this.props.city} 
          onChange={this.props.handleChange} // Prop: Puts data into state
        />

        <label htmlFor="address">Indirizzo di Residenza</label>
        <input
          className="form-control"
          id="birth"
          name="address"
          type="address"
          placeholder="Via Garibaldi 3"
          value={this.props.address} 
          onChange={this.props.handleChange} // Prop: Puts data into state
        />

        <label htmlFor="birth">Data di nascita</label>
        <input
          id="birth"
          name="birth"
          type="date"
          value={this.props.birth} 
          onChange={this.props.handleChange} // Prop: Puts data into state
        />

        <label htmlFor="born">Comune di nascita</label>
        <input
          className="form-control"
          id="born"
          name="born"
          type="text"
          placeholder="Milano"
          value={this.props.born} 
          onChange={this.props.handleChange} // Prop: Puts data into state
        />

        <label htmlFor="email">E-mail</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="email"
          placeholder="mario.rossi@gmail.com"
          value={this.props.email} 
          onChange={this.props.handleChange} // Prop: Puts data into state
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
          onChange={this.props.handleChange} // Prop: Puts data into state
        />

        <div className={style.terms}>
          <input
            className="checkbox"
            id="privacy"
            name="privacy"
            type="checkbox"
            value={this.props.privacy} 
            defaultChecked={this.props.privacy}
            // checked={this.props.privacy}
            // onChange={console.log(e)} // Prop: Puts data into state
            onClick={this.props.handleChange} // Prop: Puts data into state
          />
          <label htmlFor="privacy" className={style.privacy}>
            Ai sensi del D.Lgs 196/2003 Io sottoscritto/a {this.props.name}{" "}
            offro il mio consenso al trattamento dei dati personali per le
            attività dell’Associazione.
          </label>
        </div>
      </div>
    );
  }
}

export default Step1;
