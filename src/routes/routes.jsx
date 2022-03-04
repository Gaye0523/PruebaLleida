import Login from "../pages/Login.js"
import UserList from "../pages/UserList"
import SendMessage from "../pages/SendMessage.js"

const Routes = [
    {
      path: "/",
      sidebarName: "Login",
      component: Login,
    },
    {
      path: "/user",
      sidebarName: "",
      component: UserList,
    },
    {
      path: "/SendMessage",
      sidebarName: "",
      component: SendMessage,
    }
  ];
  
  export default Routes