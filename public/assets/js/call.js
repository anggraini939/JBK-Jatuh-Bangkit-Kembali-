/*============================================================*/
var pg_welcome  = "page_welcome.html" ;
var pg_dashboard_umu = "page_dashboard_umum.html" ;
var pg_formlogin_ptg = "page_formlogin_petugas.html" ;
var pg_menu_ptg = "page_menu_petugas.html" ;
var pg_forminput_ptg = "page_forminput_petugas.html" ;
var pg_formview_ptg = "page_formview_petugas.html" ;
var pg_formcreate_ptg = "page_formcreate_petugas.html" ;
var pg_menu_mhs = "page_menu_mahasiswa.html" ;
var pg_formview_mhs = "page_formview_mahasiswa.html" ;
var pg_formviewdataeachitem = "page_formviewdataeachitem.html" ; 
var pg_formviewdataeachitem_mahasiswa = "page_formviewdataeachitem_mahasiswa.html" ;
/*============================================================*/
var call_PetugasData = "call_petugas_data.html" ;
var js_access = "assets/js/js_access_petugas.js" ;
/*============================================================*/
var part_html_title = "part_html_title.html" ;
/*============================================================*/
var div_pagecontent = ".container-app" ;
var div_header = ".r1_header" ;
/*============================================================*/
function callpage(	dirrect	,	address	){
	try{  
		$.ajax({
			method: 'GET',
			crossOrigin: true,
			url: address,
			dataType: "html",
			success : function( event ){
				try{
					$(dirrect).empty();
					$(dirrect).append(event);
				}catch(e){
					alert("error : " + e );
				}
			},
			error : function( r , h , s ){
						alert(" error JQAJAX  " + s );				
			}
		}); 
	}catch(e){
		alert(" error callhome : " + e );
	}
}





var urlhome_inputpage = "" ;

function goHomeFromPanelForm(){
	try{
		callpage(div_pagecontent,urlhome_inputpage);
	}catch(e){
		alert("error when call action 'call' , error in : " + e);
	}
}


