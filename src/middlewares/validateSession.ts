import { Request, Response, NextFunction } from "express";
import authConfig from "../config/auth";
import { verify } from "jsonwebtoken";

interface TokeyPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function validateSession(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const sessionHeaders = request.headers.authorization;

  if (!sessionHeaders) {
    response.json({
      error: "Ops! Token não informado"
    });
  }

  const [, token] = sessionHeaders.split(" ");

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokeyPayload;

    request.user = {
      id: sub
    };

    return next();
  } catch (error) {
    response.json({
      error: ` 🙄 Token inválido`
    });
  }
}
