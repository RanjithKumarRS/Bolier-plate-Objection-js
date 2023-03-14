import swaggerUi from "swagger-ui-express";

const swaggerSpec = require("../../swagger.json");

const options = {
  customCss:
    ".opblock-summary-control:focus{outline:none !important } .swagger-ui:nth-child(2){padding:0px 50px} .swagger-ui .scheme-container{background:none;box-shadow:none} .swagger-ui .topbar{background:#fff} .swagger-ui img{content:url(https://www.crayond.com/images/logo-crayond@2x.jpg);margin-left:40px}",
  customSiteTitle: "App Name",
  customfavIcon: "",
};

function swaggerDocs(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));
}

export default swaggerDocs;
