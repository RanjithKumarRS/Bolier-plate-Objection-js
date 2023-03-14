//Router Params Validator
import { body } from "express-validator";

export const signUpSchema = [
  body("name")
    .isString()
    .withMessage("Name field must be String")
    .notEmpty()
    .withMessage("name field must NOT be empty")
    .trim(),
  body("email")
    .isEmail()
    .withMessage("Email field must be Email Type")
    .notEmpty()
    .withMessage("email field must NOT be empty")
    .trim(),
  body("sub_id")
    .isString()
    .withMessage("Sub Id field Must be String")
    .notEmpty()
    .withMessage("sub_id field must NOT be empty")
    .trim(),
  body("number")
  .exists()
  .withMessage("number Key Not exits")
   .isInt()
   .withMessage("number must be a number")
   .optional({ nullable: true }),
];
