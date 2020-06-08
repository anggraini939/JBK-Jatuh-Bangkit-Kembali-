var mysql = require('mysql');

var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'barang'
});

module.exports = connection ;