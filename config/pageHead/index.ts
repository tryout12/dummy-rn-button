import { routes } from "../routes";
import { home } from "./home";
import { page1 } from "./page1";

export const pageHead:any =  {
    [routes.HOME] : home,
    [routes.PAGE_1]: page1
}