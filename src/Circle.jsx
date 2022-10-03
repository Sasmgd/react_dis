import React from 'react'
import "./circle.css"
export default function Circle(props) {
    return (
        <div className='circle' style={{ backgroundColor: props.color }}>
            {props.children}
        </div>
    )
}
