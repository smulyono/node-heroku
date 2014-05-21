/**
Main routes functionality
 */
module.exports = function(options){
    var home_router = require('./home_routes')(options);

    /** routes **/
    options.app.get('/', home_router);
};

