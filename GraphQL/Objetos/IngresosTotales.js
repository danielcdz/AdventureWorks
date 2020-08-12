var db = require ('../db');
exports.getIngresosTotales = function (req,resp) {
	var instruction = "execute getIngresosTotales "
	instruction+=req.body.yearP
	console.log(instruction);
	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			resp.json(data.recordset)
		}
	});
};