let url="https://github.com/topics";
const request= require("request");
const cheerio = require("cheerio");
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else{
        // console.log(html);
        getTopiclinks(html);
    }
}
function getTopiclinks(html){
    let $ = cheerio.load(html);
    let linkElemArr = $(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i=0;i<linkElemArr.length;i++){
        let href = $(linkElemArr[i]).attr("href");
        console.log(href);
    }
}




