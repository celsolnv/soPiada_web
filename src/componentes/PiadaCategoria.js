import React, { Component } from 'react';
import $ from 'jquery';
import Menu from './Menu';
import ListagemPiadas from './ListagemPiadas';

export default class PiadaCategoria extends Component{
    constructor(props){
        super(props);
        this.state = {piadas:[]};
        this.categoria = this.props.match.params.categoria;
    }
    componentWillMount(){
        $.ajax({
            url:"http://localhost/so_piadas_api/piadas.php",
            dataType: 'json',
            success: function(resposta) {
                let piadasCategoria = this.filtrarPiadas(this.categoria,resposta);
                // console.log()
                this.setState({piadas:piadasCategoria});
            }.bind(this),
            error: function (resposta) {
                console.log(resposta);
            }
        });
    }
        
    filtrarPiadas(categoria,piadas){
        // eslint-disable-next-line
        let piadasCategoria = piadas.filter((piada) => {
            if (piada.categoria===categoria){ return piada }
        } )
        return piadasCategoria;
        
    }
    render(){
        return(
            <div>
                <Menu></Menu>    
                <ListagemPiadas piadas={this.state.piadas}></ListagemPiadas>

            </div>
        );
    }
}