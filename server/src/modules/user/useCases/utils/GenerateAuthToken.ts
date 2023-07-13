import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateAuthToken = (userId: string) => {
  const secret = process.env.SECRET_KEY
  const token = jwt.sign({ userId }, secret, { expiresIn: '5h' }); 

  return token;
};

export { generateAuthToken };