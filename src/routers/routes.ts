import App from "../App";
import Details from "../components/moviesList/Details";
import Create from "./Create";
import Edit from "./Edit";
import IRoute from "./route";

const routes: IRoute[] = [
  {
    path: "/",
    name: "home",
    component: App,
    exact: true,
  },
  {
    path: "/details/:id",
    name: "details",
    component: Details,
    exact: false,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: Edit,
    exact: false,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
    exact: true,
  }
]
export default routes;
