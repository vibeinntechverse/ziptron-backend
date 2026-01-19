import jwt, { JwtPayload } from "jsonwebtoken";
import { getEnv } from "../config/env.config";
import { UserRole } from "../../generated/postgres";

/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */

const ACCESS_TOKEN_SECRET = getEnv.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = getEnv.REFRESH_TOKEN_SECRET;

const ACCESS_TOKEN_EXPIRES_IN = "1d";
const REFRESH_TOKEN_EXPIRES_IN = "30d";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface AuthPayload {
  id: string;
  role: UserRole;
}

export interface DecodedAccessToken extends AuthPayload, JwtPayload {}

export interface DecodedRefreshToken extends JwtPayload {
  id: string;
}

/* -------------------------------------------------------------------------- */
/*                              TOKEN GENERATORS                              */
/* -------------------------------------------------------------------------- */

export const generateAccessToken = (payload: AuthPayload): string => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    algorithm: "HS256",
  });
};

export const generateRefreshToken = (payload: { id: string }): string => {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
    algorithm: "HS256",
  });
};

/* -------------------------------------------------------------------------- */
/*                              TOKEN VERIFIERS                               */
/* -------------------------------------------------------------------------- */

export const verifyAccessToken = (token: string): DecodedAccessToken => {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET) as DecodedAccessToken;
  } catch (error: any) {
    throw new Error(`Access token invalid or expired: ${error.message}`);
  }
};

export const verifyRefreshToken = (token: string): DecodedRefreshToken => {
  try {
    return jwt.verify(token, REFRESH_TOKEN_SECRET) as DecodedRefreshToken;
  } catch (error: any) {
    throw new Error(`Refresh token invalid or expired: ${error.message}`);
  }
};

/* -------------------------------------------------------------------------- */
/*                               TOKEN HELPERS                                */
/* -------------------------------------------------------------------------- */

export const decodeToken = (token: string): JwtPayload | null => {
  try {
    return jwt.decode(token) as JwtPayload;
  } catch {
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token);
  if (!decoded || !decoded.exp) return true;

  const currentTime = Math.floor(Date.now() / 1000);
  return decoded.exp < currentTime;
};
