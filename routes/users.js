var express = require('express');
var router = express.Router();
var fs = require('fs');
var Promise = require('bluebird');
var usersSchema = require('../model/usersSchema')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/createUser', function(req, res, next) {
    try{
        // console.log(req.body)//前端传参
        // const newAdmin = {
        //     name:'llz',
        //     email: 'llz@qq.com',
        //     password: 'pppp',
        //     isAdmin: true,
        //
        // }

        // usersSchema.create(req.body,function (error) {
        //     if(error) {
        //         console.log("====userSchema======+++++",error);
        //     } else {
        //         console.log("====userSchema======+++++",'save ok');
        //     }
        // })
        testAsync();
        let userList = [];
         usersSchema.find({'name': "llz"}, function (err, comment) {
             userList = comment;
             req.session.admin_id = 'llz';
             res.send({
                 status: 1,
                 message: '注册管理员成功',
                 data:userList,
             })
            console.log(comment)
        })


    }catch(err){
        console.log('获取超级管理列表失败', err);
        res.send({
            status: 0,
            type: 'ERROR_GET_ADMIN_LIST',
            // message: '获取超级管理列表失败'
            message: '注册管理员失败'
        })
    }
});
async function testAsync(name) {
    console.log("hello");
    for (let i = 0; i < 3; i++) {
        let fileContent = await readFile("package.json");
        console.log(new Buffer(fileContent).toString());
        console.log(".");
    }
    console.log(name);
}
let readFile = Promise.promisify(fs.readFile);
module.exports = router;
