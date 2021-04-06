import { NextFunction, Response, Router } from 'express';
import { LocalRequest } from '../types/local-request.type';

export const loggerMiddleware = Router();

loggerMiddleware.use((req: LocalRequest, res: Response, next: NextFunction) => {
    const { ip } = req.local;
    const { method, url } = req;

    console.log(`[${ip}] [${method}] : ${url}`);

    return next();
});