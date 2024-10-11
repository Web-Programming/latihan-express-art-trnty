const index = (req, res) => {
 	res.render('index', { title: 'Express' }); 
}; 

//buat controller ke halaman kontak
const kontak = (req, res) =>  {
    res.render('/kontak', { title : 'Kontak' });
}
module.exports = { index, kontak }; 