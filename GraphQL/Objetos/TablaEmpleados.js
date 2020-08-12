var db = require ('../db');
exports.getTablaEmpleados = function (req,resp) {
	var instruction = "execute PR_CREARTABLAEMPLEADOS "
	instruction+=req.body.PrimerNombre+","
	instruction+=req.body.PrimerApellido+","
	instruction+=req.body.SegundoApellido+","
	instruction+=req.body.NombrePuesto
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