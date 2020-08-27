import React from 'react'
import MasterForm from './MasterForm'
import Button from '../Button'

class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  showModal = () => {
    this.setState({ show: true })
  }
  hideModal = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <div>
        {/* // <Layout> */}
        <Button
          onClick={(e) => {
            this.showModal()
          }}
        >
          Unisciti a noi
        </Button>
        <MasterForm show={this.state.show} handleClose={this.hideModal} />

        <form name="uniscitiANoi" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="text" name="surname" />
          <input type="text" name="city" />
          <input type="text" name="address" />
          <input type="date" name="birth" />
          <input type="text" name="born" />
          <input type="text" name="cf" />
          <input type="tel" name="cell" />
          <input type="email" name="email" />
          <input type="checkbox" name="privacy" />
        </form>
        {/* // </Layout> */}
      </div>
    )
  }
}

export default FormContainer
