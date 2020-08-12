var db = require ('../db');
exports.getQuantitySales = function (req,resp) {
	var instruction = "SELECT dbo.FN_GETQUANTITYSALE(";
	instruction+=req.body.ProductID+") as QuantitySale";
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