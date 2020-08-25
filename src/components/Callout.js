import React from 'react'
import CS from './Callout.module.css'
import Form from './form/FormContainer'

const Callout = (props) => {
  return (
    <div className={CS.callout}>
      <p className="giant transparent">{props.text}</p>
      <Form />
      {/* <Button>{props.cta}</Button> */}
    </div>
  )
}

export default Callout
