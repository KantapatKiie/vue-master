import DashboardLayout from "../layout/DashboardLayout.vue";

// All view pages
import Login from "src/pages/Login.vue";
import Register from "src/pages/Register.vue";
import Account from "src/pages/Account.vue";
import RegisterConfirm from "src/pages/RegisterConfirm.vue";
import Deposit from "src/pages/Deposit.vue";
import Withdraw from "src/pages/Withdraw.vue";
import Contact from "src/pages/Contact.vue";
import History from "src/pages/History.vue";
import Promotion from "src/pages/Promotion.vue";
import RecommendFriend from "src/pages/RecommendFriend.vue";
import RecommendFriendIncome from "src/pages/RecommendFriendIncome.vue";
import Payback from "src/pages/Payback.vue";
import Other from "src/pages/Other.vue";
import ForgotPassword from "src/pages/ForgotPassword.vue";

import NotFound from "../pages/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/admin/account",
  },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/account",
    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "confirm-register",
        name: "Confirm Register",
        component: RegisterConfirm,
      },
      {
        path: "account",
        name: "Account",
        component: Account,
      },
      {
        path: "deposit-money",
        name: "Deposit Money",
        component: Deposit,
      },
      {
        path: "withdraw-money",
        name: "Withdraw Money",
        component: Withdraw,
      },
      {
        path: "history-view",
        name: "History",
        component: History,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
      {
        path: "promotion",
        name: "Promotion",
        component: Promotion,
      },
      {
        path: "recommend-friend",
        name: "Recommend Friend",
        component: RecommendFriend,
      },
      {
        path: "recommend-friend-income",
        name: "Recommend Friend Income",
        component: RecommendFriendIncome,
      },
      {
        path: "payback-money",
        name: "Payback Money",
        component: Payback,
      },
      {
        path: "other-view",
        name: "Other",
        component: Other,
      },
      {
        path: "forgot-password",
        name: "Forgot Password",
        component: ForgotPassword,
      },
    ],
  },
  { path: "*", component: NotFound },
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
