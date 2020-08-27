import React from 'react'

const BaseForm = () => {}
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
        {/* // </Layout> */}
      </div>
    )
  }
}

export default FormContainer
