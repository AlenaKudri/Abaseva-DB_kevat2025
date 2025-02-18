var express = require('express');
var router = express.Router();

var usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
