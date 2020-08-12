var serverConfig = require('./Server/serverConfig');
var sqlDB = require("mssql");


exports.executeSQL = function (sql,response) {
	var connection = new sqlDB.ConnectionPool(serverConfig.serverConfig);
	connection.connect().then(function() {
			var req = new sqlDB.Request(connection);
			req.query(sql).then(function(recordset) {
				response(recordset);
			})
			.catch(function(err) {
				console.log(err);
				response(null,err);
			});
		})
		.catch(function(err) {
			console.log(err);
			response(null,err);
		});

};