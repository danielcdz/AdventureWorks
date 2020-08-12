var db = require ('../db');
exports.getSalesPerson = function (req,resp) {
	var instruction = "execute PR_GETSALESPERSON ";

	if (req.body.NombreVendedor == "") instruction+="null,";
	else instruction+=req.body.NombreVendedor+","

	if (req.body.TerritoryID == "") instruction+="null,";
	else instruction+=req.body.TerritoryID+","

	if (req.body.ProductID == "") instruction+="null,";
	else instruction+=req.body.ProductID+","

	if (req.body.NombreProducto == "") instruction+="null,";
	else instruction+=req.body.NombreProducto+","

	if (req.body.Precio1 == "") instruction+="null,";
	else instruction+=req.body.Precio1+","

	if (req.body.Precio2 ==  "") instruction+="null";
	else instruction+=req.body.Precio2

	console.log(instruction);
	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito]");
			console.log("	[TABLA]:[Sales Person]");
			resp.json(data.recordset)
		}
	});
};