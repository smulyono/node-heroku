module.exports = function(options){
    var router = options.express.Router();

    /* GET home page. */
    router.get('/', function(req, res) {
      res.render('index', { title: 'Express 4.x Template' });
    });

    return router;
};
