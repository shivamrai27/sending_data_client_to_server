import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 8000;

//sending data from client to server have three ways
//1. through body object typically performed in postman or testing

//2. URL Param

//3. sending data through URL query string(found in google url when search something on google)
// ?key=value&key=vale 
// above ? sign is meant to starting of url query string and data contain in form of key value pair and & sign denote end of data after & another data query string starts

app.use(bodyParser.json());

app.get("/", function (req, res, next) {
    res.send('Hello World');
})
app.post('/products', function (req, res) {
    //first way
    console.log(req.body);
    res.json("product is added");
})
app.get('/paramData/:a/:b/:c', function (req, res) {
    // second way by modifying url 
    //http://localhost:8000/paramData/1/2/3
    const { a, b, c } = req.params;
    console.log(a, b, c);
    res.json('sending data through params');

})

app.get('/queryString', function (req, res) {
    // third way by url query string 
    //http://localhost:8000/queryString?name=shivam&age=24
    // const { name, age } = req.query;
    console.log(req.query);
    res.json('sending data through url query string');

})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})