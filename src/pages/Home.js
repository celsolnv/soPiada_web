import React, { Component } from 'react';

// Importando componentes
import ListagemPiadas from '../componentes/ListagemPiadas';
import Menu from '../componentes/Menu';

// Importando jquery para realizar a requisição ajax
import $ from 'jquery';

// Importando Css
import '../css/Home.css';

export default class  Home extends Component {
    constructor(){
        super();
        this.state = {piadas:[]}
    }


    render(){
        return(
            <div>
                <Menu></Menu>
                <ListagemPiadas piadas={this.state.piadas}></ListagemPiadas>

            </div>
        );
    }

    componentDidMount(){
        $.ajax({
            url:"http://localhost/so_piadas_api/piadas.php",
            dataType: 'json',
            success: function(resposta) {
                this.setState({piadas:resposta});
            }.bind(this),
            error: function (resposta) {
                console.log(resposta);
            }
        });
    }
}

