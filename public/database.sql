create database barang ;
use barang ;


create table tbl_user(
	id int(5) NOT NULL AUTO_INCREMENT,
	nama char(20) ,
	nomor char(20) ,
	usr char(20),
	pwd char(20),
	PRIMARY KEY (id)
);


create table tbl_barang(
	id int(5) NOT NULL AUTO_INCREMENT,
	idstatus int(5) ,
	nama char(20) ,
	tgl date ,
	pukul time ,
	lokasi TEXT ,
	deskripsi TEXT,
	PRIMARY KEY (id)
);



create table tbl_status(
	id int(5) NOT NULL AUTO_INCREMENT,
	nama char(20) ,
	PRIMARY KEY (id)
);

INSERT INTO `tbl_status` (`id`, `nama`) VALUES ('1', 'DI SIMPAN'), ('2', 'DI AMBIL');

create table tbl_pengembalian(
	id int(5) NOT NULL AUTO_INCREMENT,
	noktp char(20) ,
	nama char(20) ,
	telp char(15) ,
	tgl date ,
	PRIMARY KEY (id)
);

