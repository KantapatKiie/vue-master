import DashboardLayout from "../layout/DashboardLayout.vue";
// GeneralViews

// Admin pages
import Register from "src/pages/Register.vue";
import Account from "src/pages/Account.vue";
import ConfirmRegister from "src/pages/ConfirmRegister.vue";
import Deposit from "src/pages/Deposit.vue";

import UserProfile from "src/pages/UserProfile.vue";
import Typography from "src/pages/Typography.vue";
import Icons from "src/pages/Icons.vue";
import Notifications from "src/pages/Notifications.vue";

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
        path: "register",
        name: "Register",
        component: Register
      },
      {
        path: "user",
        name: "User",
        component: UserProfile
      },
      {
        path: "account",
        name: "Account",
        component: Account
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "confirm-register",
        name: "Confirm Register",
        component: ConfirmRegister
      },
      {
        path: "deposit-money",
        name: "Deposit Money",
        component: Deposit
      }
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
