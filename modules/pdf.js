
let titleSize = 10;
let textSize = 8;
let size_18 = 18;
let font = 'fonts/msyh.ttf';
function getWidth(doc){
    console.log(doc.page.width);
    return doc.page.width;
}
module.exports = {
    title:function (doc,text,x,y){
        console.log('title');
        return ()=>{
                  doc
                  .rect(x,y,getWidth(doc)-(x*2),titleSize+4)
                  .fill('#3385ff')
                  .font(font)
                  .fontSize(titleSize)
                  .fillColor('#ffffff')
                  .text(text,x+10,y);
              }
    },
    h2:(doc,text,x,y)=>{
        return doc
                .font(font)
                .fontSize(size_18)
                .text(text,x,y);
    },
    getWidth:getWidth,
    text:(doc,text)=>{
        return doc
                .font(font)
                .fontSize(textSize)
                .text(text)
    }
}
