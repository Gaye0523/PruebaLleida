import Login from "../pages/Login.js"
import SendMessage from "../pages/SendMessage.js"

const Routes = [
    {
      path: "/",
      sidebarName: "Login",
      component: Login,
    },
    {
      path: "/SendMessage",
      sidebarName: "",
      component: SendMessage,
    }
  ];
  
  export default Routes