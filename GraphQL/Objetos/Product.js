var db = require ('../db');
exports.getProducts = function (req,resp) {
	var instruction = "execute PR_GETPRODUCTS ";

	if (req.body.NombreProducto == "") instruction+="null,";
	else instruction+=req.body.NombreProducto+","

	if (req.body.NumeroProducto == "") instruction+="null,"
	else instruction+=req.body.NumeroProducto+","

	if (req.body.NombreCategoria == "") instruction+="null,"
	else instruction+=req.body.NombreCategoria+","

	if (req.body.Precio1 == "") instruction+="null,"
	else instruction+=req.body.Precio1+","

	if (req.body.Precio2 == "") instruction+="null,"
	else instruction+=req.body.Precio2+","

	if (req.body.NombreModelo == "") instruction+="null"
	else instruction+=req.body.NombreModelo

	console.log(instruction);
	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito]");
			console.log("	[TABLA]:[Product]");
			resp.json(data.recordset)
		}
	});
};