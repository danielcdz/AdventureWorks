var db = require ('../db');
var instruction = "execute PR_GETPURCHASINGVENDOR ";
exports.getCustomers = function (req,resp) {
	console.log(instruction);
	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito");
			console.log("	[TABLA]:[Purchasing]");
			resp.json(data.recordset)
		}
	});

};