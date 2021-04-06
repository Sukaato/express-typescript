import express, { Router, Request, Response, NextFunction } from 'express';
export const usersRouter: Router = express.Router();

/* GET users listing. */
usersRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({title: "Express ES6 with TypeScript Sample"});
});
