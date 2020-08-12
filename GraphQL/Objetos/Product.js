var db = require ('../db');
var instruction = "execute PR_GETPRODUCTS ";
exports.getProducts = function (req,resp) {
	instruction+=req.body.NombreProducto+","
	instruction+=req.body.NumeroProducto+","
	instruction+=req.body.NombreCategoria+","
	instruction+=req.body.Precio1+","
	instruction+=req.body.Precio2+","
	instruction+=req.body.NombreModelo
	console.log(instruction);
	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito");
			console.log("	[TABLA]:[Product]");
			resp.json(data.recordset)
		}
	});

};