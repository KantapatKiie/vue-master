<template>
  <div :style="backgrondTopNav">
    <br />
    <nav class="navbar-expand-lg">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="textSlide">
              <span class="kanitFonts2">#ข้อความ #โปรโมชั่น #ส่วนลด #ดีล</span>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="row">
              <div class="col-sm" />
              <div class="col-sm">
                <a class="navbar-brand" href="#/admin/account">
                  <img
                    class="avatar border-gray navIconRight"
                    src="img/newImage/home.png"
                    alt="..."
                  />
                </a>
              </div>
              <div class="col-sm">
                <a class="navbar-brand" href="#">
                  <img
                    class="avatar border-gray navIconRight"
                    src="img/newImage/BT_PlayGame.png"
                    alt="..."
                  />
                </a>
              </div>
              <div class="col-sm">
                <a class="navbar-brand" href="#/admin/login">
                  <img
                    class="avatar border-gray navIconRight"
                    src="img/newImage/logout.png"
                    alt="..."
                  />
                </a>
              </div>
            </div>
          </div>
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
    },
  },
  data() {
    return {
      activeNotifications: false,
      user: {
        userId: "  VIP  :  0908566930",
      },
      backgrondTopNav: {
        backgroundColor: "black",
        width: "100%",
      },
      inputViewUser: {
        width: "100%",
        height: "60%",
        marginTop: "25px",
        backgroundColor: "#383838",
        borderRadius: "5px",
        color: "white",
        fontSize: "28px",
      },
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
    },
  },
};
</script>
<style lang="scss" scoped>
.textSlide {
  font-size: 32px;
  color: #999999;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  @media (max-width: 420px) {
    font-size: 18px;
  }
}

.textSlide span {
  display: inline-block;
  padding-left: 50%;
  animation: textSlide 4s linear infinite;
}

.textSlide2 span {
  animation-delay: 2s;
}

.navIconRight {
  width: 100%;

  @media (max-width: 420px) {
    width: 12%;
  }
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
