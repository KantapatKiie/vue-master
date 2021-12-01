<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-sm-8 bgStyle">
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

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
  },
  data() {
    return {};
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bgStyle{
  background-color: black;
}
</style>
