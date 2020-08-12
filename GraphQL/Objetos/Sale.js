var db = require ('../db');
exports.getSales = function (req,resp) {
	var instruction = "execute PR_GETSALES ";
	
	if (req.body.TerritoryID == "") instruction+="null,";
	else instruction+=req.body.TerritoryID+","

	if (req.body.NombreTerritorio == "") instruction+="null,";
	else instruction+=req.body.NombreTerritorio+","

	if (req.body.NumeroOrden) instruction+="null,";
	else instruction+=req.body.NumeroOrden+","

	if (req.body.ProductID == "") instruction+="null,";
	else instruction+=req.body.ProductID+","

	if (req.body.NombreProducto == "") instruction+="null"
	else instruction+=req.body.NombreProducto

	console.log(instruction);
	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito]");
			console.log("	[TABLA]:[Sales]");
			resp.json(data.recordset)
		}
	});
}