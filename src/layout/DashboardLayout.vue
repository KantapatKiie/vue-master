<template>
  <div class="container" :style="backgrondLayout">
    <!-- <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/account">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <template slot="bottom-links">
        <sidebar-link class="active"
                      to="/admin/register">
         <i class="nc-icon nc-bell-55"></i>
          <p>Notifications</p>
        </sidebar-link>
      </template>
    </side-bar> -->
    <div class="row justify-content-center">
      <div class="col-sm-10" :style="backgrondBody">
        <top-navbar></top-navbar>
        <dashboard-content @click="toggleSidebar"> </dashboard-content>
        <content-footer></content-footer>
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
    MobileMenu
  },
  data() {
    return {
      backgrondLayout: {
        height: "100%",
        width: "100%"
      },
      backgrondBody: {
        width: "1125px"
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
