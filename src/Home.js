import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import {Container, Row,Col,InputGroup,FormControl,Button,Table,Card,ListGroup} from 'react-bootstrap';
import axios from 'axios';

export const Home = () => {

    const {register, handleSubmit} = useForm();
    const [products, setProducts] = useState([]);
    
    const [products2, setProducts2] = useState([]);

    const [products3, setProducts3] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [pursers, setPursers] = useState(0);
    const [vendors, setVendors] = useState(0);
    const [sales, setSales] = useState(0);

    const [x, setX] = useState([]);



    const cargarTotalProductos = () => {
        const tabla = {
            Tabla:"Production.Product"
        }
        axios.post("http://localhost:9000/CantidadTuplas",tabla)
            .then(response => {
                const datosP = response.data;
                setProducts3(prod => datosP[0].tuplasTotales);
                // console.log(datosP[0].tuplasTotales);
            
            })
            .catch(error => console.log(error));
    }    
    const cargarTotalClientes = () => {
        const tabla = {
            Tabla:"Sales.Customer"
        }
        axios.post("http://localhost:9000/CantidadTuplas",tabla)
            .then(response => {
                const datosP = response.data;
                setCustomers(cust => datosP[0].tuplasTotales);
                // console.log(datosP[0].tuplasTotales);
            
            })
            .catch(error => console.log(error));
    }
    const cargarTotalProveedores = () => {
        const tabla = {
            Tabla:"Purchasing.Vendor"
        }
        axios.post("http://localhost:9000/CantidadTuplas",tabla)
            .then(response => {
                const datosP = response.data;
                setPursers(cust => datosP[0].tuplasTotales);
                // console.log(datosP[0].tuplasTotales);
            
            })
            .catch(error => console.log(error));
        }
    const cargarTotalVendedores = () => {
        const tabla = {
            Tabla:"Sales.SalesPerson"
        }
        axios.post("http://localhost:9000/CantidadTuplas",tabla)
            .then(response => {
                const datosP = response.data;
                setVendors(cust => datosP[0].tuplasTotales);
                // console.log(datosP[0].tuplasTotales);
            
            })
            .catch(error => console.log(error));

        }
    const cargarTotalVentas = () => {
        const tabla = {
            Tabla:"Sales.SalesOrderHeader"
        }
        axios.post("http://localhost:9000/CantidadTuplas",tabla)
            .then(response => {
                const datosP = response.data;
                setSales(cust => datosP[0].tuplasTotales);
                // console.log(datosP[0].tuplasTotales);
            
            })
            .catch(error => console.log(error));

        }
        




    cargarTotalVentas();
    cargarTotalVendedores();
    cargarTotalProveedores();
    cargarTotalClientes();
    cargarTotalProductos();


    const onSubmit = (data) => {
        const dataJson = JSON.stringify(data);
        console.log(dataJson);
        axios.post("http://localhost:9000/Employee",data)
            .then(response => {
                const datosP = response.data;
                setProducts(prods => datosP);
                // console.log(datosP);
            
            })
            .catch(error => console.log(error));
    }

    const onSubmit2 = (data) => {
        const dataJson = JSON.stringify(data);
        console.log(dataJson);
        axios.post("http://localhost:9000/QuantitySale",data)
            .then(response => {
                const datosP = response.data;
                setProducts2(prods => datosP);
                // console.log(datosP);
            
            })
            .catch(error => console.log(error));
    }


    const onSubmitX = (data) => {
        const dataJson = JSON.stringify(data);
        console.log(dataJson);
        axios.post("http://localhost:9000/Person",data)
            .then(response => {
                const datosP = response.data;
                setX(prods => datosP);
                // console.log(datosP);
            
            })
            .catch(error => console.log(error));
    }

return(
        <div>
            <h4>Sistema de consulta a la base de datos  AdventureWorks2017</h4>
            <hr></hr>
            <p>Este sistema muestra al usuario información de la base de datos AdventureWorks2017 separada en diferentes módulos los cuales son:</p>
            <ListGroup>
                <ListGroup.Item  variant="info">- Clientes</ListGroup.Item>
                <ListGroup.Item variant="info">- Productos</ListGroup.Item>
                <ListGroup.Item variant="info">- Proveedores</ListGroup.Item>
                <ListGroup.Item variant="info">- Vendedores</ListGroup.Item>
                <ListGroup.Item variant="info">- Ventas</ListGroup.Item>
            </ListGroup>
            <br></br>
           <br></br>
            <h4>Información general de AdventureWorks2017</h4>
            <hr></hr>
            <Container>
                <Row>              
                    <Col xs={6} md={4}>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Clientes registrados</Card.Title>
                            <Card.Text>
                            AdventureWorks2017 tiene un total de Clientes registrados  de: <strong>{customers}</strong>
                             </Card.Text>
                            <Button variant="info" href="/clientes" href="/clientes">Más información</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Productos registrados</Card.Title>
                            <Card.Text>
                            AdventureWorks2017 tiene un total de Productos registrados  de: <strong>{products3}</strong>
                            </Card.Text>
                            <Button variant="info" href="/productos">Más información</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Proveedores registrados</Card.Title>
                            <Card.Text>
                            AdventureWorks2017 tiene un total de Proveedores registrados  de: <strong>{pursers}</strong>
                            </Card.Text>
                            <Button variant="info" href="/proveedores">Más información</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row> 
                <Col xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Vendedores registrados</Card.Title>
                            <Card.Text>
                            AdventureWorks2017 tiene un total de Vendedores registrados  de: <strong>{vendors}</strong>
                            </Card.Text>
                            <Button variant="info" href="/vendedores">Más información</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Ventas realizadas</Card.Title>
                            <Card.Text>
                            AdventureWorks2017 tiene un total de Ventas registradas de: <strong>{sales}</strong>
                            </Card.Text>
                            <Button variant="info" href="/ventas">Más información</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> 
            <br></br>
            <br></br>
            <br></br>
            
            <h4>Consultas básicas AdventureWorks2017</h4>
            <hr></hr>
            
            <h6>Consultar información de una persona</h6>
            <br></br>
            <form onSubmit={handleSubmit(onSubmitX)}>
            <Container>
                    <Row>              
                        <Col xs={6} md={4}>
                           <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="nombre">Nombre Persona</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="nombre"
                                    ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button variant="info" type="submit" >Buscar</Button>
                        
                        </Col>
                    
                        </Row>
                        
                    </Container>
             </form>
                    <Table responsive striped bordered hover size="sm" variant="light"  >
                
                <thead>
                    <tr>
                    <th>NombrePersona</th>
                    <th>Tipo</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            x.map( (product) => (
                                <tr>
                                <td>{product.PersonName}</td>
                                <td>{product.PersonType}</td>
                                <td>{product.PhoneNumber}</td>
                                <td>{product.EmailAddress}</td>
                               
                            </tr>
                            ))
                        }
                </tbody>
            </Table>
            <br></br>   
            <br></br>

                        <hr></hr>
            <h6>Consultar Empleados</h6>
            <br></br>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Container>
                    <Row>              
                        <Col xs={6} md={4}>
                           <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="nombre">Nombre Empleado</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="NombreEmpleado"
                                    ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button variant="info" type="submit" >Buscar</Button>
                        
                        </Col>
                    
                        </Row>
                        
                    </Container>
                    </form>
                    <Table responsive striped bordered hover size="sm" variant="light"  >
                
                <thead>
                    <tr>
                    <th>NombreEmpleado</th>
                    <th>Género</th>
                    <th>Título</th>
                    <th>IDLogin</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            products.map( (product) => (
                                <tr>
                                <td>{product.NombreEmpleado}</td>
                                <td>{product.Gender}</td>
                                <td>{product.JobTitle}</td>
                                <td>{product.LoginID}</td>
                               
                            </tr>
                            ))
                        }
                </tbody>
            </Table>
            <br></br>
            <br></br>
            <hr></hr>
            <h6>Cantidad de Productos vendidos por el ID</h6>
            <br></br>
            <form onSubmit={handleSubmit(onSubmit2)}>
            <Container>
                    <Row>              
                        <Col xs={6} md={4}>
                           <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="ProductID">ID Producto</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                type="number"
                                    name="ProductID"
                                    ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button variant="info" type="submit" >Buscar</Button>
                        
                        </Col>
                    
                        </Row>
                        
                    </Container>
                    </form>
                    <Table responsive striped bordered hover size="sm" variant="light"  >
                
                <thead>
                    <tr>
                    <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            products2.map( (product) => (
                                <tr>
                                <td>{product.QuantitySale}</td>
                               
                            </tr>
                            ))
                        }
                </tbody>
            </Table>
            <br></br>   
            
            <br></br>   
            
            <br></br>   

        </div>
    )

}