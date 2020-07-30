import React from 'react'
import { Button } from '@material-ui/core'
import CS from './Callout.module.css'

const Callout = (props) => {
    return (
        <div className={CS.callout}>
            <p className="giant transparent">{props.text}</p>
            <Button variant="contained" size="large">{props.cta}</Button>
        </div>
    )
}

export default Callout;