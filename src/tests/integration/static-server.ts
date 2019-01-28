var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var cors           = require("cors");

var port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/api/item', function (req: any, resp: any) {
    resp.json([{"title":"title1","description":"desc1","id":1548110629271},{"title":"title2","description":"desc2","id":1548110640086}])

});
app.get('/api/item/:id', function (req: any, resp: any) {
    resp.json({"title":"title1","description":"desc1","id":1548110629271})
});

app.post('/api/item', function (req: any, resp: any) {
    resp.json([{"title":"title1","description":"desc1","id":1548110629271},{"title":"title2","description":"desc2","id":1548110640086},{"title":"title3","description":"desc3","id":1548110817321}])
});

app.listen(port);
console.log('Starting sever on port ' + port);
