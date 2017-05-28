var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var pdf = require('pdfkit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pdf',function(req,res,next){
    var doc = new pdf();
    var b= new Buffer('我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国我在中国asdasdasdasd');
    doc.pipe(fs.createWriteStream('file.pdf'));
    //标题
    let page = 0;
    doc.on('pageAdded',function(){
        page++
    })
    var p = doc.page;
    doc.rect(10,10,p.width-20,20)
       .fill('#ff0000');
    doc.addPage();
    doc.font('fonts/STSONG.TTF')
       .image(path.join(__dirname,'../public/images/timg.jpg'),0,400)
       .fill('#ff0000')
       .fillColor('#00ff00')
       .fontSize(12)
       .text(b,100,600);

    doc.end();
    console.log(page);
    console.dir(p.document);
    res.sendFile(path.join(__dirname,'../file.pdf'),{
        header:{
            'Content-Type':'application/pdf'
        }
    });
})

module.exports = router;
