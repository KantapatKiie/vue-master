<template>
  <nav
    class="navbar navbar-expand-lg"
    :data-color="red"
    :style="backgrondTopNav"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#/admin/account"
        ><h2 class="kanitFonts2">LOGO</h2></a
      >
      <div class="justify-content-end">
        <ul class="navbar-nav ml-auto">
          <div class="row justify-content-md-center">
            <li class="nav-item">
              <a class="navbar-brand" href="#/admin/account">
                <img
                  class="avatar border-gray"
                  src="img/newImage/home.png"
                  alt="..."
                  :style="navIconRight"
                />
              </a>
            </li>
          </div>
          <li class="nav-item">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <div class="row justify-content-md-center">
            <li class="nav-item">
              <a class="navbar-brand" href="#/admin/register">
                <img
                  class="avatar border-gray"
                  src="img/newImage/BT_PlayGame.png"
                  alt="..."
                  :style="navIconRight"
                />
              </a>
            </li>
          </div>
          <li class="nav-item">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <div class="row justify-content-md-center">
            <li class="nav-item">
              <a class="navbar-brand" href="#/admin/register">
                <img
                  class="avatar border-gray"
                  src="img/newImage/logout.png"
                  alt="..."
                  :style="navIconRight"
                />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false,
      backgrondTopNav: {
        // backgroundColor: "#383838",
        backgroundImage: "url(img/newImage/BG_Menubar.jpg)",
        backgroundSize: "contain",
        backgroundSize: "no-repeat",
        width: "100%",
        height: "150px"
      },
      navIconRight: {
        width: "80px"
      }
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    }
  }
};
</script>
<style></style>
