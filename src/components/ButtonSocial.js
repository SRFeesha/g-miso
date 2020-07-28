import React from 'react'
import style from './ButtonSocial.module.css'
import Button from "@material-ui/core/Button";

const ButtonSocial = (props) => {
    return (
        <Button className={style.btn}>
            <img src={props.logo} />
        </Button>
    )
}

export default ButtonSocial;