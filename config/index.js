import { Home, About, Contact } from "../..";

const routes = [
   {
      path: "/contact",
      component: Contact
   },
   {
      path: "/about",
      component: About
   },
   {
      path: "/home",
      component: Home
   },
   {
      path: "/",
      component: Home
   },
];

export default routes;