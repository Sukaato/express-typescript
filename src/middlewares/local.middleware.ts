import { NextFunction, Response, Router } from 'express';
import { LocalRequest } from '../types/local-request.type';

export const localMiddleware = Router();

localMiddleware.use((req: LocalRequest, res: Response, next: NextFunction) => {
    req.local = {};

    return next();
});