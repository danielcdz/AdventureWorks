var ServerConfig = require('./serverConfig');
var express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const Product = require ('../Objetos/Product');
const Sale = require ('../Objetos/Sale');
const SalePerson = require ('../Objetos/SalePerson');
const Customer = require ('../Objetos/Customer');
const Purchasing = require ('../Objetos/Purchasing');
const QuantitySale = require ('../Objetos/QuantitySale');
const Employee = require ('../Objetos/Employee');
const TablaEmpleados = require ('../Objetos/TablaEmpleados');
const CantidadTuplas = require ('../Objetos/CantidadTuplas');
const IngresosTotales = require ('../Objetos/IngresosTotales');
const VentasTerritorioID = require ('../Objetos/VentasTerritorioID');
const Person = require ('../Objetos/Person');

var app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.post('/Product',Product.getProducts);
app.post('/Sale',Sale.getSales);
app.post('/SalePerson',SalePerson.getSalesPerson);
app.post('/Customer',Customer.getCustomers);
app.post('/Purchasing',Purchasing.getPurchasingVendors);
app.post('/QuantitySale',QuantitySale.getQuantitySales);
app.post('/Employee',Employee.getEmployees);
app.post('/TablaEmpleados',TablaEmpleados.getTablaEmpleados);
app.post('/CantidadTuplas',CantidadTuplas.getCantidadTuplas);
app.post('/IngresosTotales',IngresosTotales.getIngresosTotales);
app.post('/VentasTerritorioID',VentasTerritorioID.getVentasPorTerritorioID);
app.post('/Person',Person.getInfoPerson);

var server = app.listen(9000, function (req,res) {
    console.log('[MENSAJE]:[El servidor se esta ejecutando en el puerto 9000]');
});