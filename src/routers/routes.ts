import Details from "../components/moviesList/Details";
import List from "../components/moviesList/List";
import Create from "./Create";
import Edit from "./Edit";
import IRoute from "./route";

const routes: IRoute[] = [
  {
    path: "/",
    name: "home",
    component: List,
    exact: true,
  },
  {
    path: "/details/:id",
    name: "details",
    component: Details,
    exact: true,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: Edit,
    exact: true,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
    exact: true,
  }
]
export default routes;
