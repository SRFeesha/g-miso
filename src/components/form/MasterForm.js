import React from "react";
import Step0 from "./Step0";
import Step1 from "./Step1";
import style from "./MasterForm.module.css";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    // Set the initial input values
    this.state = {
        // show: false,
        currentStep: 1, // Default is Step 1
        email: "",
        username: "",
        password: "",
    };
    // this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);
    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

//   showModal(){
//       this.setState({show: true})
//   }

  closeModal(){
    this.props.handleClose();
    // this.props.show = false;
  }

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
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
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
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
    if (!this.props.show)
      return null;

    return (
      <React.Fragment>
        <div className={style.scrim}>
          <div className={style.formContent}>
            <a className={style.close} onClick={this.closeModal}>×</a>
            <h1>Step {this.state.currentStep} </h1>
            <form onSubmit={this.handleSubmit}>
              <Step0
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
              />
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                username={this.state.username}
              />
              {this.previousButton}
              {this.nextButton}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MasterForm;
