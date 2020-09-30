import React,{Component} from 'react';
import $ from 'jquery';

export default class ListagemPiadas extends Component{
    constructor(){
        super();
        this.state = {categorias:[],piadas:[]}
        this.abrirCategoria = this.abrirCategoria.bind(this);
    }

    componentWillMount(){
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
    
    // 
    abrirCategoria(evento){
        

    }
    render(){
        return (
            <div>
                <ul className="list-group">
                    {
                        
                        this.state.categorias.map(categoria =>{
                            
                            return(
                                <li key={categoria.id} onClick={this.abrirCategoria}  className="list-group-item" >
                                    {categoria.texto}
                                </li>
                            );
                        })
                    }
                    {console.log('chamando')}
                </ul>
                {/* <ListagemPiadas piadas={this.state.piadas}></ListagemPiadas> */}
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