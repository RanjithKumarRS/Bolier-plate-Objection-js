const path = require("path");
const fs = require("fs");
const { routeConstructor } = require("../src/routers/routeConstructor");

const { publicV1Routers, privateV1Routers } = routeConstructor;

publicV1Routers.forEach((item) => {
  fs.existsSync(path.join("src/routers/v1/public", item + "/test.js"))
    ? require(path.join("../src/routers/v1/public", item + "/test.js"))
    : false;
});

privateV1Routers.forEach((item) => {
  fs.existsSync(path.join("src/routers/v1/private", item + "/test.js"))
    ? require(path.join("../src/routers/v1/private", item + "/test.js"))
    : false;
});
