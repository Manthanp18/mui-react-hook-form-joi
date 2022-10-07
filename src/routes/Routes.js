//Internal

import TodoContainer from "../module/Movie/TodoContainer";

import { path, menuName } from "../utils/const";

// hoc
import { Redirect, Auth } from "../hoc";

const Routes = () => {
  const routes = [
    {
      name: "Todo",

      path: path.TODO,
      component: TodoContainer,
      //   hoc: Auth,
    },
  ];
  return routes;
};
export default Routes;
