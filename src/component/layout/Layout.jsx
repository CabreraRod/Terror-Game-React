import React, { Component } from 'react'
import Historia from '../historia/Historia'
import Data from '../data.json'
import Opciones from '../opciones/Opciones';
import OpcionesAnteriores from '../opcionesAnteriores/OpcionesAnteriores';
import Swal from "sweetalert2";
import Fondo from '../video/Fondo';


export default class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            historiaCompleta: Data,
            estadoHistoria: 0,
            anteriores: []
        }
    }
componentDidMount = () => {
        const alerta = {
        title: "Elige tu propia aventura!",
        confirmButtonColor: "#000",
        };
        
        Swal.fire(alerta);
    };

    reiniciar = () => {
        const confirmar = {
        title: "FIN, inicia una nueva aventura?",
        showCancelButton: true,
        confirmButtonColor: "#000",
        cancelButtonColor: "#000",
        confirmButtonText: "SI",
        cancelButtonText: "NO",
        };
        Swal.fire(confirmar)
        .then((result) => {
            if (result.isConfirmed) {
            this.setState({ estadoHistoria: 0, anteriores: []});
            }
        });
}

handleClick = (manejoOpc) => {
    const llegoAlFinal = this.state.anteriores.length  === 4 ;
    if (llegoAlFinal){
        this.reiniciar();
        return 
    }  
    
    const id = manejoOpc.target.id;
    const temp = this.state.anteriores;
    let num = 0;
    if(this.state.anteriores.length > 0){
        if(this.state.anteriores[this.state.anteriores.length - 1 ] === 'A'){
            num = num + 1 // Asegurarnos de saltar a la opc correspondiente
        }
    }
    temp.push(id)
    if(id === 'A'){
        num = num + 1
        this.setState({
            anteriores: temp,
            estadoHistoria: this.state.estadoHistoria + num
        })
    }else{
        num = num + 2
        this.setState({
            anteriores: temp,
            estadoHistoria: this.state.estadoHistoria + num
        })
    }
}
render() {
    return (
    <div className='layout'>
        <Fondo/>
        <Historia historia={this.state.historiaCompleta[ this.state.estadoHistoria ].historia}/>
        <Opciones 
        opciones={this.state.historiaCompleta[ this.state.estadoHistoria ].opciones} 
        manejo={this.handleClick}
        />
        <OpcionesAnteriores 
        selecciones={this.state.anteriores}
        />
    </div>
    )
}
}
