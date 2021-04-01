<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <div :style="itemTextCenter">
        <h1 slot="header" class="card-title kanitFonts3" :style="textCenter1">
          การสมัครของคุณสำเร็จ
        </h1>
        <div class="col-lg-12">
          <label class="kanitFonts2" :style="textCenter2">
            ขอบคุณสำหรับการสมัครสมาชิก
          </label>
        </div>
        <div class="col-lg-12">
          <label class="card-title kanitFonts2" :style="textCenter2">
            คุณสามารถใช้ชื่อผู้ใช้
          </label>
        </div>

        <div class="col-lg-12">
          <label class="card-title kanitFonts2" :style="textCenter2">
            และรหัสผ่านนี้ เพื่อทำการเข้าสู่ระบบ
          </label>
        </div>
      </div>
      <br /><br />
      <div class="imageClass" :style="imageCard">
        <div class="container-fluid" :style="marginToTop">
          <div class="col-sm-6">
            <h1 class="kanitFonts3" :style="labelStyleInput">ชื่อเข้าระบบ</h1>
          </div>
          <input
            type="email"
            class="form-control kanitFonts2"
            placeholder="User Id"
            :style="inputStyle"
          />
          <div class="col-sm-6">
            <h2 class="kanitFonts3" :style="labelStyleInput">รหัสผ่าน</h2>
          </div>
          <input
            type="email"
            class="form-control kanitFonts2"
            placeholder="Password"
            :style="inputStyle"
          />
          <div class="text-center">
            <a class="navbar-brand" href="#/admin/register">
              <img
                class="avatar border-gray"
                src="img/newImage/BT_GotoMenu.png"
                alt="Go to main page"
                :style="imageGotoMainmenu"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        userId: "  VIP  :  0908566930"
      },
      nav2Styles: {
        backgroundColor: "black",
        height: "100%"
      },
      imageUser: {
        width: "100px"
      },
      imageCardCenter: {
        width: "90%"
      },
      inputViewUser: {
        width: "90%",
        height: "45%",
        paddingTop: "15px",
        backgroundColor: "#383838",
        borderRadius: "4px",
        color: "white"
      },
      textCenter1: {
        textAlign: "center",
        color: "#ffd373"
      },
      itemTextCenter: {
        textAlign: "center"
      },
      textCenter2: {
        textAlign: "center",
        color: "white",
        fontSize: "24px"
      },
      marginToTop: {
        paddingTop: "5px"
      },
      labelStyleInput: {
        marginLeft: "25px",
        width: "90%",
        fontSize: "24px"
      },
      inputStyle: {
        backgroundColor: "black",
        borderWidth: "0px",
        margin: "25px",
        width: "90%",
        height: "60px",
        color: "white"
      },
      imageGotoMainmenu: {
        width: "22%"
      },
      imageCard: {
        backgroundImage: "url(img/newImage/BG_Detail01.png)",
        backgroundSize: "contain no-repeat",
        // backgroundPosition: "center",
        width: "1016px",
        height: "407px"
      },
      imageLogoUser: {
        backgroundImage: "url(img/newImage/Profile_Picture.png)"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.imageClass {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: "center";
}
.imageLogoUserClass {
  height: 120px;
  width: 120px;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 988px) {
    background-size: cover;
  }
}
</style>
