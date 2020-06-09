const cacheVersion = 'sisteminfoaja';

const filesToCache = [
  '/',
  'assets/css/bootstrap.css',
  'assets/css/formcss.css',
  'assets/css/app.css',
  'assets/js/bootstrap.js',
  'assets/js/jquery-3.4.1.js',
  'assets/js/index.js',
  'assets/js/app.js',
  'assets/js/call.js',
  'assets/img/logo.png',
  'part_html_title.html' ,
  'page_welcome.html' ,
  'page_dashboard_umum.html' ,
  'page_formlogin_petugas.html' ,
  'page_menu_petugas.html' ,
  'page_forminput_petugas.html' ,
  'page_formview_petugas.html' ,
  'page_formcreate_petugas.html' ,
  'page_formview_mahasiswa.html' ,
  'page_formviewdataeachitem_mahasiswa.html' ,
  'page_formviewdataeachitem.html' ,
];



self.addEventListener('install', function(event) {
	  event.waitUntil(
			caches.open(cacheVersion)
			  .then(function(cache) {
				return cache.addAll(filesToCache)
			  })
	  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) return res;

        return fetch(event.request);
      })
  );
});