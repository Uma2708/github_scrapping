const request = require("request");
const cheerio = require("cheerio");
function getReposPageHtml(url,topic){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);
        }
        else{
            getReposLink(html);
            // console.log(html);
        }
    }
    function getReposLink(html){
        let $=cheerio.load(html);
        let headingArr = $(".f3.color-fg-muted.text-normal.lh-condensed");
        console.log(topic);
        for(let i=0; i< 8;i++){
          let twoAnchors = $(headingArr[i]).find("a");
        let link= $(twoAnchors[0]).attr("href");
        console.log(link);
        }
        console.log("`````````````````````````````````");
    }

}
module.exports = getReposPageHtml;