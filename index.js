//=====================================> framework express .
const Express = require('express')
const app = new Express()
//=====================================> set port server . 
const PORT = 2000

//=====================================> import API .
//use path module
const path = require('path');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');

//====> akses config db 
connection = require("./db_config");
//====> Mulai koneksi .
connection.connect();
//connection.end();





//=============================||  START PETUGAS ||===================================//
//=================> insert data petugas .
app.get('/addnewpetugas' , function( request , response ){
	//==============================> url .
	//> localhost:2000/addnewpetugas?nama=kazuma&nomor=010112&usr=kazuma&pwd=1234
	//==============================> get parameter from url .
	var nama = request.query.nama ;
	var nomor = request.query.nomor ;
	var usr = request.query.usr ;
	var pwd = request.query.pwd ;
	//==============================> My SQL QUERY :
	var sql = "INSERT INTO tbl_user(nama, nomor ,usr ,pwd ) VALUES ('"+nama+"','"+nomor+"','"+usr+"','"+pwd+"')";
	console.log("Query SQL : " + sql);
	//==============================> DB Connect .
	//====> Query koneksi
	connection.query(sql, function(err, rows, fields) {
	  if (!err)
		console.log('The solution is: ', rows);
	  else
		console.log('Error while performing Query.');
	});
	//=====> Response .
	response.send("FINISH");
});

//=================> cek user and petugas is exist.
app.get('/cekpetugas' , function( request , response ){
	//==============================> url .
	//> localhost:2000/cekpetugas?usr=kazuma&pwd=1234
	//==============================> get parameter from url .
	var usr = request.query.usr ;
	var pwd = request.query.pwd ;
	//==============================> DB Connect .
	//====> Query koneksi .
	var strsql_query = 'SELECT count(id) from tbl_user WHERE usr="'+usr+'" AND pwd="'+pwd+'" ' ;
	connection.query(strsql_query, function(err, rows, fields) {
	console.log("Query SQL : " + strsql_query );
	if (!err){
		//=====> 
		console.log('row: ',  rows);
		//console.log('fields: ',  fields);
		//number = rows[0]['count(id)'];
		//=====> Response 
		response.send(rows);
	  }else
		console.log('Error while performing Query.');
	});
});
//=============================||  END PETUGAS ||===================================//



//=============================||  START BARANG ||===================================//
//=================> insert data barang .
app.get('/addnewbarang' , function( request , response ){
	//==============================> url .
	//> localhost:2000/addnewbarang?nama=pulpen&tgl=1992-01-02&pukul=12:00:58&lokasi=kampus&deskripsi=Barang_Hilang&idstatus=1
	//==============================> get parameter from url .
	var nama = request.query.nama ;
	var tgl = request.query.tgl ;
	var pukul = request.query.pukul ;
	var lokasi = request.query.lokasi ;
	var deskripsi = request.query.deskripsi ;
	var idstatus = request.query.idstatus ;
	//==============================> My SQL QUERY :
	var sql = "INSERT INTO tbl_barang(nama, tgl ,pukul ,lokasi ,deskripsi,idstatus)";
	sql += " VALUES('"+nama+"','"+tgl+"','"+pukul+"','"+lokasi+"','"+deskripsi+"','1')";
	//==============================> DB Connect .
	//====> Query koneksi
	connection.query(sql, function(err, rows, fields) {
	  if (!err)
		console.log('The solution is: ', rows);
	  else
		console.log('Error while performing Query.');
	});
	//=====> Response .
	response.send("FINISH :" + sql);
});


//=================> ambil informasi barang.
app.get('/setstatbarang' , function( request , response ){
	//==============================> url .
	//> localhost:2000/setstatbarang?id=1&&idstatus=2
	//==============================> get parameter from url .
	var id = request.query.id ;
	var idstatus = request.query.idstatus ;
	//==============================> DB Connect .
	//====> Query koneksi .
	var strsql = 'UPDATE tbl_barang SET idstatus="'+idstatus+'" WHERE id="'+id+'" ';
	console.log("SQL QUERY:" + strsql );
	connection.query(strsql, function(err, rows, fields) {
	  if (!err){
		//=====> 
		console.log('row: ',  rows);
		console.log('fields: ',  fields);
		//=====> Response 
		response.send("success");
	  }else
		console.log('Error while performing Query.');
	});
});

//=================> ambil informasi barang.
app.get('/getbarang' , function( request , response ){
	//==============================> url .
	//> localhost:2000/getbarang
	//==============================> DB Connect .
	//====> Query koneksi .
	connection.query('SELECT * from tbl_barang', function(err, rows, fields) {
	  if (!err){
		//=====> 
		console.log('SQL QUERY: ',  rows);
		console.log('row: ',  rows);
		//console.log('fields: ',  fields);
		//=====> Response 
		response.send(rows);
	  }else
		console.log('Error while performing Query.');
	});
});

//=================> ambil informasi barang berdasarkan id.
app.get('/getbaranguseid' , function( request , response ){
	//==============================> url .
	//> localhost:2000/getbarang?id=1
	//==============================> get parameter from url .
	var id = request.query.id ;
	//==============================> DB Connect .
	//====> Query koneksi .
	connection.query('SELECT * from tbl_barang WHERE id="'+id+'"', function(err, rows, fields) {
	  if (!err){
		//=====> 
		console.log('SQL QUERY: ',  rows);
		console.log('row: ',  rows);
		//console.log('fields: ',  fields);
		//=====> Response 
		response.send(rows);
	  }else
		console.log('Error while performing Query.');
	});
});
//=============================||  END PETUGAS ||===================================//


app.use(Express.static(__dirname + '/public'))

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running: http://localhost:${PORT}`)
})
