import React from 'react'
import style from './ButtonSocial.module.css'
import Button from "@material-ui/core/Button";


const ButtonSocial = (props) => {
    return (
        <Button className={style.btn} onClick={() => {  window.open(props.href, "_blank"); }}>
            <img src={props.logo} alt={props.alt}/>
        </Button>
    )
}

export default ButtonSocial;