import { NextFunction, Request, Response, Router } from 'express';

export const error500Router: Router = Router();

// catch 404 and forward to error handler

// error handler
error500Router.use((err: any, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    err.status = err.status || 500;
  
    // render the error page
    res.status(err.status);
    res.render('500', {title: "SERVER ERROR", error: {status: err.status.toString()}});
});