import jwt from 'jsonwebtoken';
import 'dotenv/config';

const { jwtPrivateKey } = process.env;

export const generateToken = payload => {
	return jwt.sign(payload, jwtPrivateKey);
};
