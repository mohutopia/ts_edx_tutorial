let path = require('path');
let express = require('express');

// let app = express();

// let staticPath = path.join(__dirname,'/');
// app.use(express.static(staticPath));

// app.listen(3000,function(){
//  console.log('listening...');
// });

express().use(express.static(path.join(__dirname,'/')));express().listen(3000,()=>{console.log('listening...');});