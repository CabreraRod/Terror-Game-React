import React, { Component } from 'react'
import forest from '../../forest_Trim.mp4'
export default class Fondo extends Component {
render() {
    return (
    <div>
        <video autoPlay loop
            style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height:"100%",
            objectFit:"cover",
            transform: "translate(-50%, -50%)",  
            zIndex:"-1"
            }}>
        <source src={forest} type="video/mp4" />
        </video>
    </div>
    )
}
}
