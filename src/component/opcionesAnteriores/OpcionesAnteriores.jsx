import React, { Component } from 'react'

export default class OpcionesAnteriores extends Component {
render() {
    return (
    <div className='recordatorio'>
        <h2>Seleccion anterior: {this.props.selecciones[this.props.selecciones.length - 1]} </h2>
        <h3>Historial de opciones elegidas</h3>
        <ul>
            {this.props.selecciones.map(seleccion => <li>{seleccion}</li> )}
        </ul>
    </div>
    )
}
}
