import express from "express";
import { RoutesV1 } from "./src/routers";
import morgan from "morgan";
import cors from "cors";
import OS from "os";
import dotenv from "dotenv";
import swaggerDocs from "./src/utils/swagger"; 
import swaggerUI from "swagger-ui-express";
import swaggerJson from "./swagger_output.json";
import errorHandler from "./src/middlewares/errorHandler";

// Environment variables Configuration:
dotenv.config();

// Thread Pool Configuration
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;

// Express Server Configuration:
const app = express();

app.use(cors());
const PORT = process.env.PORT || 5000;
app.set("port", PORT);
app.use(express.json());

// Router Configurations:
app.use("/api/v1", RoutesV1);

app.use(errorHandler);

//Unhandled Promise Rejection
process.on("unhandledRejection", (reason, promise) => {
  console.trace("Unhandled Promise Rejection:", reason);
});


// Swagger Configurations
swaggerDocs(app);

// Logger for Request Error messages
app.use(
  morgan("combined", {
    skip: (req, res) => {
      return res.statusCode <= 400;
    },
  })
);

/**
 *  HeartBeat and Process Information
 */

if (process.env.NODE_ENV !== "production") {
  app.get("/", async (req, res) => {
    res.status(200).send({
      uptime: process.uptime(),
      message: "Server is running...",
      process_id: process.pid,
      date: new Date(),
      platform: OS.platform(),
      processor: OS.cpus()[0].model,
      architecture: OS.arch(),
      thread_count: OS.cpus().length,
      total_memory: `${(OS.totalmem() / 1e9).toFixed(2)} GB`,
      free_memory: `${(OS.freemem() / 1e9).toFixed(2)} GB`,
    });
  });
  const options = {
    customCss:
      ".opblock-summary-control:focus{outline:none !important } .swagger-ui:nth-child(2){padding:0px 50px} .swagger-ui .scheme-container{background:none;box-shadow:none} .swagger-ui .topbar{background:#fff} .swagger-ui img{content:url(https://www.crayond.com/images/logo-crayond@2x.jpg);margin-left:40px}",
    customSiteTitle: "Public Listing",
    customfavIcon: "https://www.crayond.com/images/favicon_crayond.png",
  };
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJson, options));
}

// Server Messages:
app.listen(
  PORT,
  console.log(
    "\x1b[35m%s\x1b[0m",
    `🚀 Server listening on port ${PORT} in Environment Mode on "${process.env.NODE_ENV}"`
  )
);

export default app;
