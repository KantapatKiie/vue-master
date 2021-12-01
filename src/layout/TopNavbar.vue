<template>
  <div class="container" :style="backgrondTopNav">
    <br />
    <!-- Top Navbar -->
    <div class="row">
      <div class="col-7">
        <div class="textSlide">
          <span class="kanitFonts1">#ข้อความ #โปรโมชั่น #ส่วนลด #ดีล</span>
        </div>
      </div>
      <div class="col-5">
        <div class="row">
          <div class="col-4">
            <a class="navbar-brand" href="#/admin/account">
              <img
                class="img-responsive navIconRight"
                src="img/newImage/home.png"
                alt="..."
              />
            </a>
          </div>
          <div class="col-4">
            <a class="navbar-brand" href="#">
              <img
                class="img-responsive navIconRight"
                src="img/newImage/BT_PlayGame.png"
                alt="..."
              />
            </a>
          </div>
          <div class="col-4">
            <a class="navbar-brand" href="#/admin/login">
              <img
                class="img-responsive navIconRight"
                src="img/newImage/logout.png"
                alt="..."
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <!-- User Profile -->
    <div class="row">
      <div class="col-3">
        <img
          class="img-responsive d-block mx-auto imgLogoProfile"
          src="img/newImage/Profile_Picture.png"
          alt="Logo-line"
        />
      </div>
      <div class="col-9">
        <input
          type="text"
          id="userId"
          class="kanitFonts2 inputUserId"
          disabled
          v-model="user.userId"
        />
      </div>
    </div>
    <br />
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
        // width: "100%",
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
  font-size: 24px;
  color: #999999;
  margin: 5px;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  @media (max-width: 420px) {
    font-size: 16px;
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
  width: 70%;
  justify-content: center;
  @media (max-width: 420px) {
    width: 100%;
  }
}

.imgLogoProfile {
  width: 55%;

  @media (max-width: 420px) {
    width: 80%;
  }
}

.inputUserId {
  width: 90%;
  margin-top: 18px;
  background-color: #383838;
  border-radius: 5px;
  color: white;
  font-size: 26px;

  @media (max-width: 420px) {
    width: 100%;
    height: 60%;
    margin-top: 12px;
    background-color: #383838;
    border-radius: 5px;
    color: white;
    font-size: 16px;
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
