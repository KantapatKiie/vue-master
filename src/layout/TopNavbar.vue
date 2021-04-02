<template>
  <div :style="backgrondTopNav">
    <br />
    <nav
      class="navbar navbar-expand-lg"
      :data-color="red"
      :style="backgrondTopNav"
    >
      <div class="container-fluid">
        <div class="col-sm-8">
          <div class="textSlide">
            <span class="kanitFonts2" :style="textSlideHeader"
              >#ข้อความ #โปรโมชั่น #ส่วนลด #ดีล</span
            >
          </div>
        </div>
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
                <a class="navbar-brand" href="#">
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
                <a class="navbar-brand" href="#/admin/login">
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
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <img
            class="img-responsive d-block mx-auto"
            src="img/newImage/Profile_Picture.png"
            alt="Logo-line"
          />
        </div>
        <div class="col-sm-8">
          <input
            type="text"
            id="userId"
            class="kanitFonts2"
            disabled
            v-model="user.userId"
            :style="inputViewUser"
          />
        </div>
      </div>
    </div>
  </div>
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
      user: {
        userId: "  VIP  :  0908566930"
      },
      backgrondTopNav: {
        backgroundColor: "black",
        width: "100%"
      },
      navIconRight: {
        width: "80px"
      },
      inputViewUser: {
        width: "100%",
        height: "60%",
        marginTop: "25px",
        backgroundColor: "#383838",
        borderRadius: "5px",
        color: "white",
        fontSize: "32px",
      },
      textSlideHeader: {
        fontSize: "32px",
        color: "#999999"
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
<style lang="scss" scoped>
.textSlide {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.textSlide span {
  display: inline-block;
  padding-left: 100%;
  animation: textSlide 5s linear infinite;
}

.textSlide2 span {
  animation-delay: 2.5s;
}

@keyframes textSlide {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-70%, 0);
  }
}
</style>
