import JWT from 'jsonwebtoken';
import User from "../models/userModel.js";




export const isAuthenticatedUser = async (req, res, next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }

};
