import { Router } from "express";
import { validationResult } from "express-validator";
import { createUser } from "../../../../controllers/user_profiles";
import { signUpSchema } from "./schema";

const routes = Router();

routes.post("/user_sync", signUpSchema, async (req, res) => {
   /** 
   * #swagger.tags = ['Auth']
   * #swagger.path = '/auth/user_sync'
   * #swagger.requestBody = {
            required: true,
            "@content": {
                "application/json": {
                    schema: {
                        $ref: '#/definitions/Auth'
                    }
                }
            } 
        }
    * #swagger.responses[201] = {
            description: "Success",
            content: {
                "application/json": {
                    schema:{
                        type:"object",
                        properties:{
                          type:{
                            type:"string",
                            example:"success"
                          },
                          response:{
                            type:"string",
                            example:"User Profile and Congito Sub Id Synced Successfully !!"
                          }
                        }
                    }
                }           
            }
        }
    * #swagger.responses[400] = {
            description: "Validation Error",
            content: {
                "application/json": {
                    schema:{
                      oneOf: [
                          {
                            $ref: "#/definitions/SchemaValidationError"
                          },
                          {
                            $ref: "#/definitions/ModelValidationError",
                          },
                          {
                            $ref: "#/definitions/SyntaxError",
                          }
                      ]  
                }          
            }
        }
    }
    * #swagger.responses[500] = {
            description: "Internal Server Error",
            content: {
                "application/json": {
                    schema:{  
                        $ref: '#/definitions/ServerError' 
                    }
                }           
            }
        }
   */
  try {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ type: "error", errors });
    }

    let response = await createUser(req.body);
    res.status(201).send({ type: "success", response });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = routes;
