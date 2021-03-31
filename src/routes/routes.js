import DashboardLayout from "../layout/DashboardLayout.vue";
// GeneralViews

// Admin pages
import Login from "src/pages/Login.vue";
import Register from "src/pages/Register.vue";
import Account from "src/pages/Account.vue";
import RegisterConfirm from "src/pages/RegisterConfirm.vue";
import Deposit from "src/pages/Deposit.vue";
import Withdraw from "src/pages/Withdraw.vue";

import NotFound from "../pages/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/admin/account"
  },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/account",
    children: [
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "register",
        name: "Register",
        component: Register
      },
      {
        path: "confirm-register",
        name: "Confirm Register",
        component: RegisterConfirm
      },
      {
        path: "account",
        name: "Account",
        component: Account
      },
      {
        path: "deposit-money",
        name: "Deposit Money",
        component: Deposit
      },
      {
        path: "withdraw-money",
        name: "Withdraw Money",
        component: Withdraw
      },
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
