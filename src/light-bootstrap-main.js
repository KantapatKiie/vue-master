import VTooltip from "v-tooltip";
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import SideBar from "./components/SidebarPlugin";

// asset imports
import "bootstrap/dist/css/bootstrap.css";
import "./assets/sass/light-bootstrap-dashboard.scss";
import "./assets/css/stylesheet.css";

export default {
  install(Vue) {
    Vue.use(GlobalComponents);
    Vue.use(GlobalDirectives);
    Vue.use(SideBar);
    Vue.use(VTooltip);
  }
};
