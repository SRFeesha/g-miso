import React from 'react'
import Layout from '../Layout'
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
      <Layout>
        <Button
          onClick={(e) => {
            this.showModal()
          }}
        >
          Unisciti a noi
        </Button>
        <MasterForm show={this.state.show} handleClose={this.hideModal} />
      </Layout>
    )
  }
}

export default FormContainer
