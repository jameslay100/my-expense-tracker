const http = require('http');
const fs = require("fs");

http.createServer(function (request, response) {
    let fileName = "";
    let myData = "";
    console.log("We got a request from: " + request.url);
    // can use switch case here to route but i think u can do a seperate route file instead
    switch (request.url) {
        case "/":
            fileName = "./views/index.html";
            break;
        case "/add-expense":
            fileName = "./views/add-expense.html";
            break;
        case "/view-expenses":
            fileName = "./views/view-expenses.html";
            break;
    }
    if (fileName !== "") {
        fs.readFile(fileName, function (err, data) {
            response.write(data);
            response.end();
        });
    }

    // fs.readFile("./views/index.html", function (err, data) {
    //     myData = data;
    //     response.write(myData);
    //     response.end();
    // });
})
    .listen(8080);