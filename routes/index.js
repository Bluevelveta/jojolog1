var express = require('express');
var router = express.Router();
app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var user = ""
var pwd = ""


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/result', function(req, res, next) {
    res.render("result", {
        user: user,
        pass: pass
    });
});

router.get('/login', function(req, res, next) {
    user = ""
    pass = ""
    res.render("login", {
        user: user,
        pass: pass
    });
});

router.post('/login', function(req, res, next) {
    user = req.body.user
    pass = req.body.pass
    res.redirect('/result')
});


module.exports = router;