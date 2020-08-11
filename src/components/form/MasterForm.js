import React from "react";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Button from "../Button";
import style from "./MasterForm.module.css";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      name:"",
      birth:"",
      city:"",
      address:"",
      email: "",
      privacy: "",
    };
    // These bindings are necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep+1;
    this.setState({
      currentStep: currentStep,
    });
  }
  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <=1? 0: currentStep-1;
    this.setState({
      currentStep: currentStep,
    });
  }
  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 0) {
      return (
        <div data-pag="prev">
          <Button onClick={this._prev} type="secondary">
            Previous
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
            Next
          </Button>
        </div>
      );
    }
    // ...else render nothing
    return null;
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
        Email: ${email} \n 
        Username: ${username} \n
        Password: ${password}`);
  };

  render() {
    if (!this.props.show) return null;

    return (
      <React.Fragment>
        <div className={style.scrim}>
          <div className={style.formContent}>
            <header className={style.stepper}>
              <p>Fase {this.state.currentStep} di 3</p>
              <a className={style.close} onClick={this.props.handleClose}>×</a>
            </header>

            <form onSubmit={this.handleSubmit}>
              <Step0
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
              />

              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                name={this.state.name}
                birth={this.state.birth}
                city={this.state.city}
                address={this.state.address}
                email={this.state.email}
                privacy={this.state.privacy}
              />

              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
              />

              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
              />

              <footer>
                {this.previousButton}
                {this.nextButton}
              </footer>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MasterForm;
