import React from 'react'
import './bigcube.css'
export default function BigCube(props) {
    return (
        <div className={"bigcube 'bck-color-"} >
            {props.children}
        </div >
    )
}
