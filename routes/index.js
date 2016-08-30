var express = require('express');
var crawl = require('./../scripts/crawler');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Web Crawler'});
});

/* POST crawl link. */
router.post('/', function (req, res, next) {
    if (req.body) {
        console.log('URL: '+ req.body.url);
        console.log('PAGE TO VISIT: '+ req.body.pages);
        crawl(req.body.url);
    }
    res.render('index', {title: 'Web Crawler'});
});

module.exports = router;
