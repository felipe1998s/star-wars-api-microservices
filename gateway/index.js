const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const PORT = 8000;
const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin',"*"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use("/characters",createProxyMiddleware({
    target:"http://characters:8001",
    changeOrigin:true,
}))

app.use("/films",createProxyMiddleware({
    target:"http://films:8002",
    changeOrigin:true,
}))

app.use("/planets",createProxyMiddleware({
    target:"http://planets:8003",
    changeOrigin:true,
}))


app.listen(PORT, ()=> {
    console.log(`Gateway on port ${PORT}`);
})