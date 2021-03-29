<template>
  <div class="wrapper-full-page" :style="myStyle">
    <!-- <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/register">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/admin/table-list">
        <i class="nc-icon nc-notes"></i>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link>

      <template slot="bottom-links">
        <sidebar-link class="active"
                      to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>LINK</p>
        </sidebar-link>
      </template>
    </side-bar> -->
    <div class="row justify-content-md-center">
      <div class="col-lg-4" >
        <top-navbar></top-navbar>
        <dashboard-content @click="toggleSidebar"> </dashboard-content>
        <content-footer></content-footer>
        <!-- <mobile-menu></mobile-menu> -->
      </div>
      <!-- Toggle -->
      <!-- <div class="col-lg-3">
        <circle-menu
          type="bottom"
          :number="4"
          animate="animated"
          mask="black"
          circle
          class="navbar-transparent"
          colors="white"
        >
          <i slot="item_btn" class="fa fa-bars fa-lg" :style="btnToggle"></i>
          <i
            slot="item_1"
            class="fa fa-twitch fa-lg"
            :style="colorMenuToggle"
          ></i>
          <i
            slot="item_2"
            class="fa fa-weixin fa-lg"
            :style="colorMenuToggle"
          ></i>
          <i
            slot="item_3"
            class="fa fa-weibo fa-lg"
            :style="colorMenuToggle"
          ></i>
          <i
            slot="item_4"
            class="fa fa-twitter fa-lg"
            :style="colorMenuToggle"
          ></i>
        </circle-menu>
      </div> -->
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
import CircleMenu from "vue-circle-menu";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    CircleMenu
  },
  data() {
    return {
      myStyle: {
        backgroundColor: "#f0f0f0"
      },
      nav2Styles: {
        backgroundColor: "black"
      },
      imageUser: {
        width: "50px"
      },
      colorMenuToggle: {
        color: "white"
      },
      btnToggle: {
        color: "white"
      },
      flexStyleBody:{
        flex: "0.5",
      }
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
