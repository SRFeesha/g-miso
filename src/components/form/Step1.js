import React from 'react'

class Step1 extends React.Component {
    render() {
      if (this.props.currentStep !== 2) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="form-group">
          <label htmlFor="email">Name</label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={this.props.email} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>
      )
    }
  }

export default Step1;