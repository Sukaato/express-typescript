import { NextFunction, Request, Response, Router } from 'express';
import createError from 'http-errors';

export const error404Router: Router = Router();

// catch 404 and forward to error handler
error404Router.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
});