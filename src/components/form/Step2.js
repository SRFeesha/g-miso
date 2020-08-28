import React from 'react'

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null
    }
    return (
      <div className="form-group">
        <label htmlFor="city">Comune di Residenza</label>
        <input
          className="form-control"
          id="city"
          name="city"
          type="text"
          placeholder="Roma"
          value={this.props.city}
          onChange={this.props.handleChange}
        />

        <label htmlFor="address">Indirizzo di Residenza</label>
        <input
          className="form-control"
          id="birth"
          name="address"
          type="text"
          placeholder="Via Garibaldi 3"
          value={this.props.address}
          onChange={this.props.handleChange}
        />

        <label htmlFor="birth">Data di nascita</label>
        <input
          className="form-control"
          id="birth"
          name="birth"
          type="date"
          value={this.props.birth}
          onChange={this.props.handleChange}
        />

        <label htmlFor="born">Comune di nascita</label>
        <input
          className="form-control"
          id="born"
          name="born"
          type="text"
          placeholder="Milano"
          value={this.props.born}
          onChange={this.props.handleChange}
        />

        <label htmlFor="cf">Codice Fiscale</label>
        <input
          className="form-control"
          id="cf"
          name="cf"
          type="text"
          placeholder="MRIRSS86T21A532O"
          value={this.props.cf}
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}

export default Step2
