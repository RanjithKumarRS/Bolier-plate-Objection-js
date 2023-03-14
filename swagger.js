import swaggerAutogen from "swagger-autogen";
import fs from "fs";
import path from "path";

export const doc = {
  info: {
    version: "1.0.0",
    title: "App list",
    description:
      "",
  },
  servers: [
    {
      url: "http://localhost:1998/api/v1/",
      description: "local server",
    },
    {
      url: "",
      description: "stage server",
    },
  ],
  tags: [
    {
      name: "Auth",
      description: "User Sync",
    }
  ],
  schemes: ["http", "https"],
  components: {
    "@schemas": {
      Auth: {
        required: ["name", "email", "sub_id"],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
          mobile_no: {
            type: "string",
          },
          mobile_no_country_code: {
            type: "string",
          },
          sub_id: {
            type: "string",
          },
          country: {
            type: "number",
          },
        },
      },
      SchemaValidationError: {
        type: "object",
        properties: {
          type: {
            type: "string",
            example: "error",
          },
          errors: {
            type: "object",
            properties: {
              errors: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    msg: {
                      type: "string",
                      example: "field must NOT be empty",
                    },
                    param: {
                      type: "string",
                      example: "field name",
                    },
                    location: {
                      type: "string",
                      example: "body",
                    },
                  },
                },
              },
            },
          },
        },
      },
      ModelValidationError: {
        type: "object",
        properties: {
          type: {
            type: "string",
            example: "error",
          },
          message: {
            type: "string",
            example: "name: must have required property 'name'",
          },
        },
      },
      UnAutherized: {
        type: "object",
        properties: {
          type: {
            type: "string",
            example: "error",
          },
          message: {
            type: "string",
            example: "You are not an authorized user!",
          },
        },
      },
      NotFound: {
        type: "object",
        properties: {
          type: {
            type: "string",
            example: "error",
          },
          message: {
            type: "string",
            example: "API Key Not Found or data not found in table",
          },
        },
      },
      ServerError: {
        type: "object",
        properties: {
          type: {
            type: "string",
            example: "error",
          },
          message: {
            type: "string",
            example: "Internal Server Error",
          },
        },
      },
      SyntaxError: {
        type: "object",
        properties: {
          type: {
            type: "string",
            example: "error",
          },
          message: {
            type: "string",
            example: "Invalid Json Syntax Error, Kindly check the payload..!!",
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        in: "headers",
        name: "authorization",
        description: "Bearer Token",
      },
    },
  },
};

const outputFile = "./swagger_output.json";

let privateRoutes = path.join(__dirname + "/src/routers/v1/private");
let publicRoutes = path.join(__dirname + "/src/routers/v1/public");
const privateEndpoints = fs
  .readdirSync(privateRoutes, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((item) => `${privateRoutes}/${item.name}/index.js`);

const publicEndpoints = fs
  .readdirSync(publicRoutes, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((item) => `${publicRoutes}/${item.name}/index.js`);

const endponitsFiles = [...privateEndpoints, ...publicEndpoints];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endponitsFiles, doc);
