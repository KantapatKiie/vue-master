<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <br />
      <div class="col-sm-12 text-center">
        <h1 class="card-title kanitFonts3" :style="textColerHeader">
          ยินดีต้อนรับ
        </h1>
      </div>
      <div class="container" :style="imageCard">
        <div class="wrapper-full-page" :style="marginToTop">
          <div class="form-group">
            <div class="col-sm-6">
              <label class="kanitFonts2" :style="labelStyleInput"
                >ชื่อเข้าระบบ</label
              >
            </div>
            <input
              type="search"
              class="form-control kanitFonts1"
              placeholder="User Id"
              :style="inputStyle"
            />
          </div>
          <div class="form-group">
            <div class="col-sm-6">
              <label class="kanitFonts2" :style="labelStyleInput"
                >รหัสผ่าน</label
              >
            </div>
            <input
              type="search"
              class="form-control kanitFonts1"
              placeholder="Password"
              :style="inputStyle"
            />
          </div>
          <div :style="itemTextCenter">
            <a class="navbar-brand" href="#/admin/account">
              <img
                class="avatar border-gray"
                src="img/newImage/BT_Login.png"
                alt="..."
                :style="imageGotoMainmenu"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-sm-12 text-center">
          <a class="navbar-brand" href="#/admin/forgot-password">
            <label class="card-title kanitFonts1" :style="textFooterBoxLogin">
              ลืมรหัสผ่าน
            </label>
          </a>
          <a class="navbar-brand" href="#">
            <label class="card-title kanitFonts1" :style="textFooterBoxLogin">
              / ติดต่อเจ้าหน้าที่
            </label>
          </a>
        </div>
      </div>
      <br /><br />
      <div class="row justify-content-md-center">
        <div class="col-sm-5">
          <hr class="new5" />
        </div>
        <div class="col-sm-2 text-center">
          <label class="card-title kanitFonts1" :style="textFooterBoxLogin">
            ยังไม่มีบัญชี
          </label>
        </div>
        <div class="col-sm-5">
          <hr class="new5" />
        </div>
      </div>
      <br /><br />
      <div class="text-center">
        <a class="navbar-brand" href="#/admin/register">
          <img
            class="img-responsive"
            src="img/newImage/BT_Register.png"
            :style="imgRegister"
          />
        </a>
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
      textColerHeader: {
        color: "#ffd373"
      },
      textFooterBoxLogin: {
        color: "#757575",
        fontSize: "24px"
      },
      itemTextCenter: {
        textAlign: "center"
      },
      marginToTop: {
        paddingTop: "25px"
      },
      labelStyleInput: {
        marginLeft: "25px",
        width: "90%",
        fontSize: "20px"
      },
      inputStyle: {
        backgroundColor: "black",
        borderWidth: "0px",
        margin: "25px",
        width: "95%",
        color: "white",
        fontSize: "22px"
      },
      imageGotoMainmenu: {
        width: "250px"
      },
      imageCard: {
        backgroundImage: "url(img/newImage/BG_Detail01.png)",
        marginTop: "5%",
        marginBottom: "5%",
        backgroundSize: "contain no-repeat",
        // backgroundPosition: "center",
        width: "1016px",
        height: "407px"
      },
      imgRegister: {
        width: "350px"
      }
    };
  }
};
</script>
<style lang="scss">
hr.new5 {
  border: 1px solid white;
  border-radius: 0px;
}
</style>
