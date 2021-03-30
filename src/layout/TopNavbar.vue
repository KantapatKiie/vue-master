<template>
  <nav class="navbar navbar-expand-lg" :data-color="red" :style="myStyle">
    <div class="container-fluid">
      <a class="navbar-brand" href="#/admin/register">LOGO</a>
      <div class="justify-content-end">
        <ul class="navbar-nav ml-auto">
          <!-- <base-dropdown title="Language">
            <a class="dropdown-item" href="#">Thai</a>
            <a class="dropdown-item" href="#">English</a>
            <div class="divider"></div>
            <a class="dropdown-item" href="#">Other language</a>
          </base-dropdown> -->
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
          <li class="nav-item">&nbsp;&nbsp;&nbsp;</li>
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
          <li class="nav-item">&nbsp;&nbsp;&nbsp;</li>
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
      myStyle: {
        backgroundColor: "#383838"
      },
      navIconRight: {
        width: "40px"
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
