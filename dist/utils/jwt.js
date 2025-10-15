import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
export function signJwt(payload, expiresIn = "1h") {
    const options = { expiresIn: expiresIn };
    return jwt.sign(payload, JWT_SECRET, options);
}
export function verifyJwt(token) {
    return jwt.verify(token, JWT_SECRET);
}
//# sourceMappingURL=jwt.js.map