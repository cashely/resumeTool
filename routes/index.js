var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var pdf = require('pdfkit');

var makePdf = require('../modules/pdf.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pdf',function(req,res,next){
    var doc = new pdf();
    let resultPdf = doc.pipe(fs.createWriteStream('file.pdf'));
    makePdf.h2(doc,'石大明',10,10);
    doc.moveDown(1);
    makePdf.text(doc,'男|6年工作经验|1990年3月|已婚');
    doc.moveDown(0.4);
    makePdf.text(doc,'现居住于广东 广州-天河区|大专| 户口安徽-安庆');
    doc.moveDown(0.4);
    makePdf.text(doc,'手机：15013306010');
    makePdf.text(doc,'Email：290119516@qq.com');
    doc.image('public/images/873b57828b3a0a67-77cabb970fa5d135-f7440e1fa71165595d808201d2aa9c50.jpg',doc.page.width-100,10,{width:80,height:100});
    doc.moveDown(2);
    makePdf.title(doc,'我的资料',10,doc.y)();
    doc.end();

    resultPdf.on('finish',()=>{
        res.sendFile(path.join(__dirname,'../file.pdf'),{
            header:{
                'Content-Type':'application/pdf'
            }
        });
    })
})

module.exports = router;
