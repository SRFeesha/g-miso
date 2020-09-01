import React from 'react'
// import style from './ShadowTitle.module.css'
import Spacer from './Spacer'

const shadowTitle = (props) => {
  return (
    <div>
      <Spacer h={12} />

      <div className="shadow-title-parent">
        <div className="shadow">{props.title}</div>
        <div className="shadow-title">{props.title}</div>
      </div>
    </div>
  )
}

export default shadowTitle
