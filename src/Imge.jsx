import React from 'react'
import "./imgs.css"
export default function Imge(props) {
    return (
        <div >
            <img className='imgs' src={props.link} alt="" />
        </div>
    )
}
