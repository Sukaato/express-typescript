import { error404Router } from "./errors/error-404.router";
import { error500Router } from "./errors/error-500.router";
import { homeRouter } from "./home";
import { usersRouter } from "./users";

export const routers = {
  home: homeRouter,
  users: usersRouter,

  errors: {
    404: error404Router,
    500: error500Router
  }
}