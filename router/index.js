let express = require("express");
let WxShare = require('../controller/wxShare')
const router = express.Router();

router.get('/getWxParm',function(req,res,next){
    var url = req.query.href;
    WxShare.accessToken(url,function(config){
        res.send(config)
        console.log(config)
    })
})

module.exports = router; 