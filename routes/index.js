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
    doc.image('public/images/873b57828b3a0a67-77cabb970fa5d135-f7440e1fa71165595d808201d2aa9c50.jpg',doc.page.width-90,10,{width:80,height:100});
    doc.moveDown(2);
    makePdf.title(doc,'自我评价',10,doc.y)();
    makePdf.ul(doc,'1、精通 JavaScript HTML/HTML5/XML、CSS/CSS3，熟悉常见跨浏览器问题，了解必要的计算机网络协议；\n2、熟悉主流JavaScript框架和库，理解框架设计原理，目前主要致力于react全家桶的研究使用，有良好的WEB前端优化经验；\n3、熟悉HTML5等前端领域新技，熟悉W3C标准、Ajax、DOM、BOM等技术，了解angularjs/react/react native等Javascript开发架构和组件;')

    doc.moveDown();
    makePdf.title(doc,'求职意向',10,doc.y)();

    doc.moveDown();
    makePdf.title(doc,'技能标签',10,doc.y)();
    makePdf.skillMap(doc,'js,html,css3,jquery')


    doc.moveDown();
    makePdf.title(doc,'工作经历',10,doc.y)();
    makePdf.works(doc,[
                        {title:'广州责卓医药咨询有限公司 | 25000k/月',content:'责任描述：1、网站整体、页面布局规划；'},
                        {title:'广州责卓医药咨询有限公司 | 25000k/月',content:'责任描述：1、网站整体、页面布局规划；'},
                        {title:'广州责卓医药咨询有限公司 | 25000k/月',content:'责任描述：1、网站整体、页面布局规划；'}
                    ]);


    doc.moveDown();
    makePdf.title(doc,'教育经历',10,doc.y)();
    makePdf.schools(doc,[
                            {title:'广东工贸职业技术学院 电脑艺术设计 大专',content:'主要学习的是一些基础知识;'},
                            {title:'广东工贸职业技术学院 电脑艺术设计 大专',content:'主要学习的是一些基础知识;'},
                            {title:'广东工贸职业技术学院 电脑艺术设计 大专',content:'主要学习的是一些基础知识;'}

                    ]);












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
