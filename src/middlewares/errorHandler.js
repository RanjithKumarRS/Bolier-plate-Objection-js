const errorHandler = (err, req, res, next) => {
  if (err.stack) {
    console.log(err.stack);
    console.log(err.name);
  } else {
    console.log(err);
  }
  switch (err.name) {
    case "UnauthorizedError":
      res
        .status(err.statusCode || 403)
        .json({ type: "error", message: err.message });
      break;
    case "NotFoundError":
      res
        .status(err.statusCode || 404)
        .json({ type: "error", message: err.message });
      break;
    case "ValidationError":
      res
        .status(err.statusCode || 400)
        .json({ type: "error", message: err.message || err.error });
      break;
    case "SyntaxError":
      res.status(err.statusCode || 400).json({
        type: "error",
        message: "Invalid Json Syntax Error, Kindly check the payload..!!",
      });
      break;
    default:
      res
        .status(err.statusCode || 500)
        .json({ type: "error", message: "Internal Server Error" });
      break;
  }
  res.end();
};

export default errorHandler;
