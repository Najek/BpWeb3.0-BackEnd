import jwt from "jsonwebtoken";
export declare function signJwt(payload: object, expiresIn?: number | string): string;
export declare function verifyJwt(token: string): string | jwt.JwtPayload;
//# sourceMappingURL=jwt.d.ts.map