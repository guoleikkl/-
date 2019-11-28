var express = require('express');
var router = express.Router();

/**
 *TODO 必须修改root为静态页面目录
 */
let root = '/home/guolei/桌面/FarmManger/public/';
/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile(root + 'login.html');
});


const users = [
    ["admin", "20181225"],
    ["tech", "20181225"],
    ["tech2", "20181225"],
    ["market", "20181225"],
    ["guest", " "]

];

function checkUser(acnt, pswd) {
    for (user of users) {
        if (user[0] === acnt) {
            if (user[1] === pswd) {
                return 1;
            } else {
                return 0;
            }
        }
    }
    return -1;
}

// 处理/login的post请求
router.post('/login', function (req, res) {
    let acnt = req.body.acnt;
    let pswd = req.body.pswd;
    let code = checkUser(acnt, pswd);
    res.writeHead(200, {"Access-Control-Allow-Origin": "http://localhost:63342"});
    res.write(String(code));
    res.end();
    let state;
    switch (code) {
        case 1:
            state = " Success";
            break;
        default:
            state = " Filed";
            break;
    }
    console.log("User: " + acnt + " Pswd: " + pswd + state);
});

let sccl = [
    ["1", "2018-12-31", "番茄", "12", "0.05", "无"],
    ["2", "2018-12-31", "青椒", "15", "0.04", "无"],
    ["3", "2018-12-31", "包菜", "31", "0.03", "无"]
];

router.get('/sccl', function (request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify(sccl));
    response.end();
});

router.post('/sccl', function (request, response) {
    let rst = request.body;
    let time = new Date();
    let rid = String(sccl.length + 1);
    let data = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + (time.getDay() - 1);
    let record = [rid, data, rst.name, rst.number, rst.price, rst.note];
    sccl.push(record);
    console.log(record);
    response.writeHead(200, {
        "Access-Control-Allow-Origin": "http://localhost:63342",
    });
    response.end();
});

let pfpy = [
    ["1", "2019-1-1", "肥料1", "300", "5%", "鸡粪,马粪", "15,17"],
    ["2", "2019-1-1", "肥料2", "150", "3%", "牛粪,饼肥", "24,13"],
    ["3", "2019-1-1", "肥料3", "400", "6%", "稻壳,锯末", "12,13"],
];

router.get('/pfpy', function (request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify(pfpy));
    response.end();
});

router.post('/pfpy', function (request, response) {
    let rst = request.body;
    let time = new Date();
    let rid = String(pfpy.length + 1);
    let data = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + (time.getDay() - 1);
    let record = [rid, data, rst.name, rst.salary, rst.ratio, rst.material, rst.dosage];
    pfpy.push(record);
    console.log(record);
    response.writeHead(200, {
        "Access-Control-Allow-Origin": "http://localhost:63342",
    });
    response.end();
});

let scjh = [
    ["1", "白菜", "2019-1-1", "2019-3-14", "土地1", "2019-5-8", "2019-6-1", "5000", "2019-5-20", "300"],
    ["2", "萝卜", "2019-1-1", "2019-4-21", "土地2", "2019-6-4", "2019-7-8", "3500", "2019-7-1", "500"],
    ["3", "青椒", "2019-1-1", "2019-5-12", "土地3", "2019-7-9", "2019-9-9", "6400", "2019-8-18", "800"]
];
router.get('/scjh', function (request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify(scjh));
    response.end();
});

router.post("/scjh", function (request, response) {
    let time = new Date();
    let rid = String(scjh.length + 1);
    let data = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + (time.getDay() - 1);
    let rst = request.body;
    let record = [rid, rst.name, data, rst.seed_date, rst.seed_place, rst.launch_date, rst.delist_date, rst.pre_gain, rst.pre_hdate, rst.pre_hgain];
    scjh.push(record);
    response.writeHead(200, {
        "Access-Control-Allow-Origin": "http://localhost:63342",
    });
    response.end();
});


let nzjl = [
    ["1", "2019-1-1", "种田", "土地1", "300", "化肥", "5", "白菜种子", "3"],
    ["2", "2019-1-1", "挑粪", "土地2", "150", "农家肥", "7", "番茄种子", "5"],
    ["3", "2019-1-1", "播种", "土地3", "240", "干草", "4", "玉米种子", "8"]
];
router.get('/nzjl', function (request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify(nzjl));
    response.end();
});

router.post("/nzjl", function (request, response) {
    let time = new Date();
    let rid = String(scjh.length + 1);
    let data = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + (time.getDay() - 1);
    let rst = request.body;
    let record = [rid, data, rst.name, rst.land_num, rst.labor_cost, rst.material, rst.m_amount, rst.seed, rst.s_amount];
    console.log(record);
    nzjl.push(record);
    response.writeHead(200, {
        "Access-Control-Allow-Origin": "http://localhost:63342",
    });
    response.end();
});


let sjcs = [
    ["1", "2019-1-1", "土豆", "3", "0.8"],
    ["2", "2019-1-1", "茄子", "5", "0.9"],
    ["3", "2019-1-1", "玉米", "8", "1.2"]
];
router.get('/sjcs', function (request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify(sjcs));
    response.end();
});

router.post("/sjcs", function (request, response) {
    let time = new Date();
    let rid = String(sjcs.length + 1);
    let data = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + (time.getDay() - 1);
    let rst = request.body;
    let record = [rid, data, rst.name, rst.amount, rst.price];
    console.log(record);
    sjcs.push(record);
    response.writeHead(200, {
        "Access-Control-Allow-Origin": "http://localhost:63342",
    });
    response.end();
});

let tixi = [
    ["辣椒", "上市", "2019-1-6"],
    ["白菜", "下市", "2019-1-7"],
    ["卷心菜", "上市", "2019-1-8"]
];

router.get('/tixi', function (request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify(tixi));
    response.end();
});

router.post("/tixi", function (request, response) {

    let code = parseInt(request.body.id);
    let list = tixi.splice(Math.round(code / 10), 1)[0];
    let type = (code % 10) * tixi.length;
    tixi.splice(type, 0, list);

    console.log(tixi);
    response.writeHead(200, {
        "Access-Control-Allow-Origin": "http://localhost:63342",
    });
    response.end();
});

let scyj = [
    ["2019-1-1", "菠菜", "39"],
    ["2019-1-1", "黄瓜", "54"],
    ["2019-1-1", "萝卜", "67"]
];

router.get('/scyj', function (request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify(scyj));
    response.end();
});

let jiyk = [
    ["菠菜", "2345", "390", "5600", "2018-10-21", "2018-11-30", "3300"],
    ["黄瓜", "5352", "540", "7800", "2018-9-14", "2018-10-31", "2450"],
    ["萝卜", "1363", "670", "4312", "2018-8-16", "2018-11-25", "3672"]
];

router.get('/jiyk', function (request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify(jiyk));
    response.end();
});

let jyzx = [
    ["番茄", [{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 54},
        {x: 4, y: 53}, {x: 5, y: 0},]],
    ["竹笋", [{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 67},
        {x: 4, y: 99}, {x: 5, y: 0},]],
    ["空心菜", [{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 25},
        {x: 4, y: 56}, {x: 5, y: 0},]]
];

router.get('/jyzx', function (request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify(jyzx));
    response.end();
});

module.exports = router;
