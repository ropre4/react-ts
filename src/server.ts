var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var cors           = require("cors");

const PORT  = 3001;
const DELAY = 3000;

var items: any[] = []

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/api/item', function (req: any, resp: any) {
    delayResponse(resp, items, DELAY)

});
app.get('/api/item/:id', function (req: any, resp: any) {
    const response = items.filter((item: any)=> parseInt(item.id) === parseInt(req.params.id))
    delayResponse(resp, response.length === 1 ? response[0] : {}, DELAY)
});

app.post('/api/item', function (req: any, resp: any) {
    items.push({
        ...req.body,
        id: Date.now()
});
    delayResponse(resp, items, 0)
});

function delayResponse(resp: any, response: any, delay: number) {
    setTimeout(()=>{
        resp.json(response)

    }, delay)
}

app.listen(PORT);
console.log('Starting sever on port ' + PORT);
