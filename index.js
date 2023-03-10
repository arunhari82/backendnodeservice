const express = require("express");
var cors = require('cors')
var app = express()
app.use(cors())

var productList = [{
    id : 1,
    name : "Research Models & Services"
},
{
    id : 2,
    name : "Cell Sourcing"
},
{
    id : 3,
    name : "Discovery Services"
},
{
    id : 4,
    name : "Safety Assessment"
},
{
    id : 5,
    name : "Laboratory Sciences"
},
{
    id : 6,
    name : "Cell and Gene Therapy CDMO Solutions"
},
{
    id : 7,
    name : "Biologics Testing Solutions"
},
{
    id : 8,
    name : "Avian Vaccine Services"
},{
    id : 9,
    name : "QC Microbial Solutions"
},{
    id : 10,
    name : "Scientific & Regulatory Advisory Services"
},{
    id : 11,
    name : "Scientific Staffing, Training & Operations Support "
}
];

app.get("/products", (request, response) => {
    response.json(productList)
});

app.listen(4500, () => {
    console.log("Listen on the port 4500...");
});