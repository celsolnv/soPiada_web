import React, { Component } from 'react';
import Menu from '../componentes/Menu';
import ListagemCategorias from '../componentes/ListagemCategorias';

export default class Categorias extends Component{
    render(){
        return(
            <div>
                <Menu></Menu>
                <ListagemCategorias ></ListagemCategorias>
                
            </div>
        );
    }
}