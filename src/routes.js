import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Sobre from './pages/Sobre';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component ={Home} ></Route>
            <Route exact path='/categorias' component ={Categorias} ></Route>
            <Route exact path='/sobre' component ={Sobre} ></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;