import { Request, Response, NextFunction } from 'express';
import { passport } from '../../services/passport';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Falha na autenticação.' });
    }

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token de autenticação não fornecido.' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Token de autenticação inválido.' });
    }

    try {
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      if (decodedToken.exp < Date.now() / 1000) {
        return res.status(401).json({ error: 'Token expirado. Faça login novamente.' });
      }
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Token de autenticação inválido.' });
    }
  })(req, res, next);
};

export { authMiddleware };
