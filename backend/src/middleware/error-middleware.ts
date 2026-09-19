import { Response } from "express";
import ApiError from "../utils/api-error";

const errorMiddlleware = (error: Error | ApiError, res: Response) => {
  if (error instanceof ApiError) {
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
    return;
  }
  res.status(500).json({
    success: false,
    message: `Internal server error ${error.message}`,
  });
};
export default errorMiddlleware;
