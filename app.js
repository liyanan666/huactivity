let express = require("express");
let app = express();
let router = require('./router/index.js')


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
app.use('/',router)

//静态文件
app.use('/activity',express.static('./static'));
 
var server = app.listen(8090,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://127.0.0.1:'+port);
});