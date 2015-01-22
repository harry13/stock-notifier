var cheerio = require("cheerio-httpcli");

var codes = [
    2121, 2432, 3758, 2403, 7844, 4777, 3823
];

var uri = "http://info.finance.yahoo.co.jp/search/?query=" + codes.join("+");

var scrape = function ($) {
    var results = $(".searchresults");
    for (var i = 0; results[i] !== undefined; i ++) {
        var $result = $(results[i]);
        console.log($result.find(".code").text());
    }
};

cheerio.fetch(uri, null, function (error, $) {
    if (error) console.error(error);
    else scrape($);
});
