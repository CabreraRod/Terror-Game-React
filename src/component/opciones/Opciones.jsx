import React, { Component } from 'react'
/* Props.opciones Objeto */

export default class Opciones extends Component {
render() {
    return (
    <div className='opciones'>
        <div className='opcion'>
        <button className='botones' id='A' onClick={this.props.manejo}>A </button>
            <h2>{this.props.opciones.a}</h2>
        </div>
        <div className='opcion'>
        <button className='botones' id='B' onClick={this.props.manejo}>B</button>
            <h2>{this.props.opciones.b}</h2>
        </div>  
    </div>
    )
}
}
