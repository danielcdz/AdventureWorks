var db = require ('../db');
exports.getEmployees = function (req,resp) {
	var instruction = "SELECT * from FN_GETEMPLOYEES(";
	instruction+="'"+req.body.NombreEmpleado+"'"+")";
	console.log(instruction);
	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito]");
			console.log("	[TABLA]:[Person]");
			resp.json(data.recordset)
		}
	});
};