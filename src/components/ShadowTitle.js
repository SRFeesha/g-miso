import React from 'react'
import STS from './ShadowTitle.module.css'
import Spacer from './Spacer'

const shadowTitle = (props) => {
  return (
    <div>

      <Spacer h={12} />
      
      <div className={STS.father}>
        <div className={STS.shadow}>{props.title}</div>
        <div className={STS.shadowTitle}>{props.title}</div>
      </div>
    </div>
  )
}

export default shadowTitle
