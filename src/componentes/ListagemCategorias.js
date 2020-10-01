import React,{Component} from 'react';
import $ from 'jquery';
import {NavLink} from 'react-router-dom';

export default class ListagemCategorias extends Component{
    constructor(){
        super();
        this.state = {categorias:[]}
    }
    
    render(){
        return (
            <div>
                <ul className="list-group">
                    {
                        
                        this.state.categorias.map(categoria =>{
                            
                            return(
                                <NavLink key={categoria.id} to={"categorias/"+categoria.texto} >
                                    <li className="list-group-item" >
                                        {categoria.texto}
                                    </li>
                                </NavLink>
                            );
                        })
                    }
                </ul>
                
            </div>
        );
    }

    componentDidMount(){
        $.ajax({
            url:"http://localhost/so_piadas_api/categorias.php",
            dataType: 'json',
            success: function(resposta) {
                this.setState({categorias:resposta});
            }.bind(this),
            error: function (resposta) {
                
                console.log(resposta);
            }
        });
    }
    
}