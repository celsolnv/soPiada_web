import React, {Component} from 'react';
import Menu from '../componentes/Menu';

export default class Sobre extends Component{
    render(){
        return(
            <div>
                <Menu></Menu>
                <div class="container-sobre container ">
                    <p> Este é um projeto realizado com o intuito de ajudar as pessoas em momentos difícil, afinal, como
                        já dizia um velho ditado: "Rir é sempre o melhor remédio".</p>
                    <p>Aqui você encontrará piadas antigas (sejamos sinceros, aqui tem para todo o tipo de humor rsrsrs), porém interessantes.</p>
                </div>
            </div>
        );
    }
}