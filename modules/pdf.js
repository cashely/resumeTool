
let titleSize = 10;
let textSize = 8;
let size_18 = 18;
let size_12 = 10;
let defaultColor = '#333';
let themeColor = '#3385ff';
let font = 'fonts/msyh.ttf';
function getWidth(doc){
    console.log(doc.page.width);
    return doc.page.width;
}
function text(doc,text){
    return doc
            .font(font)
            .fillColor(defaultColor)
            .fontSize(textSize)
            .text(text)
}

function weight(doc,text){
    return  doc
                .font(font)
                .fillColor(defaultColor)
                .fontSize(size_12)
                .text(text)
}
function work(doc,title,content){
    // return function(){
        weight(doc,title);
        text(doc,content);
        doc.moveDown();
    // }
}

function works(doc,worksMap){
    worksMap.forEach((item)=>{
        work(doc,item.title,item.content)
    })
}
module.exports = {
    title:function (doc,text,x,y){

        return ()=>{
                  doc.moveUp();
                  doc
                  .rect(x,y,getWidth(doc)-(x*2),titleSize+4)
                  .fill(themeColor)
                  .font(font)
                  .fontSize(titleSize)
                  .fillColor('#ffffff')
                  .text(text,x+5,y);
                  doc.moveDown();
              }
    },
    work:work,
    works:works,
    school:work,
    schools:works,
    h2:(doc,text,x,y)=>{
        return doc
                .font(font)
                .fontSize(size_18)
                .text(text,x,y);
    },
    weight:(doc,text)=>{
        return  doc
                    .font(font)
                    .fontSize(size_12)
                    .text(text)
    },
    getWidth:getWidth,
    text:text,
    ul:(doc,words)=>{
        let p = words.split('\n');
        return p.forEach((item,index)=>{
            text(doc,item);
        })
    },
    skillMap:(doc,words)=>{
        let arr = words.split(',');
        return arr.forEach((item,index)=>{

            doc.rect(doc.x+20+(index !=0 ? doc.widthOfString(arr[index-1]) : 0),doc.y-(index != 0 ? doc.currentLineHeight() : 0),doc.widthOfString(item)+10,doc.currentLineHeight()+2).fill('grey');
            // text(doc,item);
            doc.fillColor('#ffffff').text(item,doc.x+25+(index !=0 ? doc.widthOfString(arr[index-1]) : 0),doc.y-(index != 0 ? doc.currentLineHeight() : 0));

        })
    }
}
