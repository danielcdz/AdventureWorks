import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { Home } from './Home';
import { Ventas } from './Ventas';
import { Clientes } from './Clientes';
import { Productos } from './Productos';
import { Vendedores as Vendedores } from './Vendedores';
import { Proveedores } from './Proveedores';
import { Layout } from './components/Layout';
import { NavigationBar} from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';


export const Main = () => {
    return (
        <>
        <NavigationBar/>
        <Jumbotron/>
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/productos" component={Productos}/>
                        <Route exact path="/ventas" component={Ventas}/>
                        <Route exact path="/vendedores" component={Vendedores}/>
                        <Route exact path="/clientes" component={Clientes}/>
                        <Route exact path="/proveedores" component={Proveedores}/>
                    </Switch>
                </Router>
            </Layout>

            
        </>
    )
}
