const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', "POST, GET, OPTIONS, DELETE, PUT");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, role");
    next();
}

module.exports = allowCrossDomain;