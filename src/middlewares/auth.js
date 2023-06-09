import { verify } from "../utils/jwt";

export const isAuthenticated = async (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[1] &&
      req.headers.authorization.split(" ")[1] != "null" &&
      req.headers.authorization.split(" ")[1] != "undefined"
    ) {
      const token = req.headers.authorization.split(" ")[1];
      const { id: user_id } = await verify(token); 
      req.body["user_id"] = user_id;
      return next();
    }
    return next({
      statusCode: 404,
      name: "NotFoundError",
      message: "API KEY NOT FOUND !",
    });
  } catch (err) {
    return next({
      code: 400,
      message: err.message,
    });
  }
}; 
