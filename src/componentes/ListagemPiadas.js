// Componente responsável pelo retorno das piadas na página web
// Este componente cuida somente da formatação das piadas na página web
// Dessa forma, ele recebe as piadas através de seus atributos

import React,{Component} from 'react';

export default class ListagemPiadas extends Component{
    // constructor(props){
    //     super(props);

    // }
    render(){
        return (
            <div className="container">
                {
                this.props.piadas.map(piada =>{
                    return(
                        <div className="card" key={piada.id}>
                            <h5 className="card-title">{piada.categoria}</h5>
                            <div className="card-text">
                                {
                                    piada.texto.split('-').map( (frase,index)=>{
                                        return(
                                            <span key={index}>
                                                {frase}
                                                <br/>
                                            </span>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        );
                    })
                }
                {
                    console.log("Uma chamada!")
                }
            </div>
        );
    }
}