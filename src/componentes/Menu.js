import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../css/side_menu.css';

import logo from '../static/logo.svg';
import close from '../static/close.svg';
import logoSideMenu from '../static/logo_side_menu.svg';
import menuSanduiche from '../static/menu_sanduiche.svg';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = { menuLateral: 'none' }
        this.abrirMenuLateral = this.abrirMenuLateral.bind(this);
        this.fecharMenuLateral = this.fecharMenuLateral.bind(this);
    }

    abrirMenuLateral() {
        console.log('abrindo...');
        this.setState({ menuLateral: "block" })

    }
    fecharMenuLateral() {
        this.setState({ menuLateral: "none" })
    }

    render() {
        return (
            <div>
                <div id="sideMenu" className="sideMenu" style={{ display: this.state.menuLateral }}>
                    <div className="sideMenu-superior">
                        <div id="close-side-menu" className="close" onClick={this.fecharMenuLateral}>
                            <img src={close} alt="botão para fechar side menu"></img>
                        </div>
                    </div>
                    <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                        <img src={logoSideMenu} alt="logo do menu lateral"></img>
                    </div>
                    <hr style={{ backgroundColor: 'white' }} />
                    <div className="sideMenu-options">
                        
                        <NavLink to="/">
                            <div>
                                <span>Home</span>
                            </div>
                        
                        </NavLink>
                        
                        <NavLink to="/categorias">
                            <div>
                                <span>Categorias</span>
                            </div>
                        </NavLink>

                        {/* <a href="favoritos">
                            <div>
                                <span>Favoritas</span>
                            </div>
                        </a> */}
                        <NavLink to="/sobre">
                            <div>
                                <span>Sobre</span>
                            </div>
                        </NavLink>

                    </div>
                </div>

                <div className="navbar">
                    <div id="sanduiche" onClick={this.abrirMenuLateral}>
                        <img className="icon-menu" src={menuSanduiche} alt="Menu estilo sanduíche" ></img>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="chapéu do bobo da corte" />
                    </div>
                </div>
            </div>
        );

    }
}