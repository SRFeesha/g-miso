import React from 'react'
import Step0 from './Step0'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Button from '../button/Button'
import style from './MasterForm.module.css'
// import { navigate } from "gatsby"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.formRef = React.createRef()
    this.state = {
      currentStep: 0,
      currentTitle: 'Come fare parte di Miso',
      name: '',
      surname: '',
      cf: '',
      city: '',
      address: '',
      birth: '',
      born: '',
      email: '',
      cell: '',
      privacy: false,
    }
    // These bindings are necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  _next() {
    let currentStep = this.state.currentStep
    let currentTitle = this.state.currentTitle
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 3 ? 4 : currentStep + 1
    currentTitle = this.setTitle(currentStep)
    this.setState({
      currentStep: currentStep,
      currentTitle: currentTitle,
    })
  }
  _prev() {
    let currentStep = this.state.currentStep
    let currentTitle = this.state.currentTitle
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 0 : currentStep - 1
    currentTitle = this.setTitle(currentStep)
    this.setState({
      currentStep: currentStep,
      currentTitle: currentTitle,
    })
  }
  get previousButton() {
    let currentStep = this.state.currentStep
    // If the current step is not 1, then render the "previous" button
    if (currentStep > 0 && currentStep < 4) {
      return (
        <div data-pag="prev">
          <Button onClick={this._prev} type="secondary">
            Indietro
          </Button>
        </div>
      )
    }
    return null
  }
  get nextButton() {
    let currentStep = this.state.currentStep
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <div data-pag="next">
          <Button type="secondary" onClick={this._next}>
            Continua
          </Button>
        </div>
      )
    }
    // If it's the 3rd step render the submit form button
    else if (currentStep === 3) {
      return (
        <div data-pag="next">
          <Button type="submit" onClick={this.handleSubmit}>
            Invia
          </Button>
        </div>
      )
    }
    // Enhance UX with confirmation button
    else if (currentStep === 4) {
      return (
        <div data-pag="next">
          <Button type="secondary" onClick={this.props.handleClose}>
            Ok, ho Capito
          </Button>
        </div>
      )
    }
    return null
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value, checked } = event.target
    name === 'privacy'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value })
  }

  setTitle(step) {
    let title = ''
    switch (step) {
      case 0:
        title = 'Come fare parte della Miso'
        break
      case 1:
        title = 'Inserisci i tuoi dati'
        break
      case 2:
        title = 'Inserisci i tuoi dati'
        break
      case 3:
        title = 'Conferma i tuoi dati'
        break
      case 4:
        title = 'Tutto è andato a buon fine!'
        break
      default:
        title = 'Errore nel titolo'
        break
    }
    return title
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'uniscitiANoi',
        ...this.state,
      }),
    })
      // .then(() => alert("Success!"))
      .then(() => this._next())
      .catch((error) => alert(error))
  }

  render() {
    if (!this.props.show) return null
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
    } = this.state

    return (
      <React.Fragment>
        <div className={style.modal}>
          <header className={style.stepper}>
            <p>Fase {this.state.currentStep} di 4</p>
            <h3>{this.state.currentTitle}</h3>
            {/* eslint-disable-next-line */}
            <a
              className={style.close}
              onClick={this.props.handleClose}
              href="#"
            >
              ×
            </a>
          </header>

          <form
            onSubmit={this.handleSubmit}
            name="uniscitiANoi"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Step0 currentStep={currentStep} />

            <Step1
              currentStep={currentStep}
              handleChange={this.handleChange}
              name={name}
              surname={surname}
              email={email}
              privacy={privacy}
              cell={cell}
            />

            <Step2
              currentStep={currentStep}
              handleChange={this.handleChange}
              city={city}
              address={address}
              birth={birth}
              born={born}
              cf={cf}
              privacy={privacy}
            />

            <Step3 currentStep={currentStep} state={this.state} />

            <Step4
              currentStep={currentStep}
              // handleChange={this.handleChange}
            />
          </form>

          <footer>
            {this.previousButton}
            {this.nextButton}
          </footer>
        </div>

        <div className={style.scrim}></div>
      </React.Fragment>
    )
  }
}

export default MasterForm
