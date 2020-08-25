import React from "react";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Button from "../Button";
import style from "./MasterForm.module.css";
import { navigate } from "gatsby"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    // this.ContactForm = React.createRef()
    this.state = {
      currentStep: 0,
      currentTitle: "Come fare parte di Miso",
      name: "",
      city: "",
      address: "",
      birth: "",
      born: "",
      email: "",
      cell: "",
      privacy: false,
    };
    // These bindings are necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    // this.setTitle = this.setTitle.bind(this)
  }
 


  _next() {
    let currentStep = this.state.currentStep;
    let currentTitle = this.state.currentTitle;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    currentTitle = this.setTitle(currentStep);
    this.setState({
      currentStep: currentStep,
      currentTitle: currentTitle,
    });
  }
  _prev() {
    let currentStep = this.state.currentStep;
    let currentTitle = this.state.currentTitle;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 0 : currentStep - 1;
    currentTitle = this.setTitle(currentStep);
    this.setState({
      currentStep: currentStep,
      currentTitle: currentTitle,
    });
  }
  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 0) {
      return (
        <div data-pag="prev">
          <Button onClick={this._prev} type="secondary">
            Indietro
          </Button>
        </div>
      );
    }
    // ...else return nothing
    return null;
  }
  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <div data-pag="next">
          <Button type="secondary" onClick={this._next}>
            Continua
          </Button>
        </div>
      );
    }
    // ...else render nothing
    return null;
  }

  // Use the submitted data to set the state
  handleChange(event) {
    // console.log(event.target);
    const { name, value } = event.target;
    // this.setState({
    //   [name]: value,
    // });
    // if (name === "privacy")
    //   this.setState({
    //     [name]: event.target.checked,
    //   });
    
    name === "privacy" ? this.setState({[name]: event.target.checked,}) : this.setState({[name]: value}) 
  }

  setTitle(step) {
    let title = "";
    switch (step) {
      case 0:
        title = "Come fare parte di Miso";
        break;
      case 1:
        title = "Inserisci i tuoi dati";
        break;
      case 2:
        title = "Conferma i tuoi dati";
        break;
      case 3:
        title = "Tutto è andato a buon fine!";
        break;
      default:
        break;
    }
    return title;
  }

  // Trigger an alert on form submission
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { email, name, cell } = this.state;
  //   alert(`Your registration detail: \n 
  //       Email: ${email} \n 
  //       Username: ${name} \n
  //       Password: ${cell}`);
  // };
  // handleSubmit = event => {
  //   event.preventDefault()
  //   const form = this.ContactForm.current
  //   console.warn(form);
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: this.encode({
  //       "form-name": form.getAttribute("name"),
  //       ...this.state,
  //     }),
  //   })
  //     .then(() => navigate("/"))
  //     .catch(error => alert(error))

  //   this.setState({
  //     name: "",
  //     email: "",
  //     // message: "",
  //   })
  // }

  handleSubmit = e => {
    // e.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "uniscitiANoi", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };


  render() {
    if (!this.props.show) return null;

    return (
      <React.Fragment>
        <div className={style.modal}>
          <header className={style.stepper}>
            <p>Fase {this.state.currentStep} di 3</p>
            <h3>{this.state.currentTitle}</h3>
            <a
              className={style.close}
              onClick={this.props.handleClose}
              href="#"
            >
              ×
            </a>
          </header>

          {/* <form onSubmit={this.handleSubmit} name="JoinForm" data-netlify="true"> */}
          <form name="uniscitiANoi" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <Step0 currentStep={this.state.currentStep} />

            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              name={this.state.name}
              city={this.state.city}
              address={this.state.address}
              birth={this.state.birth}
              born={this.state.born}
              email={this.state.email}
              cell={this.state.cell}
              privacy={this.state.privacy}
            />

            <Step2
              currentStep={this.state.currentStep}
              state={this.state}
            />

            <Step3
              currentStep={this.state.currentStep}
              // handleChange={this.handleChange}
            />
          </form>

          <footer>
            {this.previousButton}
            {this.nextButton}
          </footer>
        </div>
        <div className={style.scrim}>

        </div>
      </React.Fragment>
    );
  }
}

export default MasterForm;
