import { Router, Request, Response, NextFunction } from 'express';

export const homeRouter: Router = Router();

/* GET home page. */
homeRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        title: 'Express with es6',
        author: {
            name: "Vaumoron Julien",
            url: "https://github.com/Sukaato",
            web: "https://sukaato.github.io"
        },
    });
});