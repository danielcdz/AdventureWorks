var db = require ('../db');
exports.getCustomers = function (req,resp) {
	var instruction = "execute PR_GETCUSTOMERS ";

	if (req.body.PersonID == "") instruction+="null,";
	else instruction+=req.body.PersonID+","

	if (req.body.NombreCliente == "") instruction+="null,";
	else instruction+=req.body.NombreCliente+","

	if (req.body.TerritoryID == "") instruction+="null,";
	else instruction+=req.body.TerritoryID+","

	if (req.body.NombreTerritorio == "") instruction+="null,";
	else instruction+=req.body.NombreTerritorio+","

	if (req.body.NombreProducto == "") instruction+="null,";
	else instruction+=req.body.NombreProducto+","

	if (req.body.ProductID == "") instruction+="null";
	else instruction+=req.body.ProductID

	console.log(instruction);
	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito]");
			console.log("	[TABLA]:[Customers]");
			resp.json(data.recordset)
		}
	});

};