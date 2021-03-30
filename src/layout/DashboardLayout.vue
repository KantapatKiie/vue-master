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
      <div class="col-lg-4">
        <top-navbar></top-navbar>
        <dashboard-content @click="toggleSidebar"> </dashboard-content>
        <content-footer></content-footer>
        <!-- <mobile-menu></mobile-menu> -->
        <!-- <nav class="menu">
          <input
            type="checkbox"
            href="#"
            class="menu-open"
            name="menu-open"
            id="menu-open"
          />
          <label class="menu-open-button" for="menu-open">
            <span class="lines line-1"></span>
            <span class="lines line-2"></span>
            <span class="lines line-3"></span>
          </label>

          <a href="#" class="menu-item blue"> <i class="fa fa-anchor"></i> </a>
          <a href="#" class="menu-item green"> <i class="fa fa-coffee"></i> </a>
          <a href="#" class="menu-item red"> <i class="fa fa-heart"></i> </a>
          <a href="#" class="menu-item purple">
            <i class="fa fa-microphone"></i>
          </a>
          <a href="#" class="menu-item orange"> <i class="fa fa-star"></i> </a>
          <a href="#" class="menu-item lightblue">
            <i class="fa fa-diamond"></i>
          </a>
        </nav> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
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
      flexStyleBody: {
        flex: "0.5"
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
