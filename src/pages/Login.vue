<template>
  <div class="card-body nav2Styles">
    <div class="col-sm-12 text-center">
      <h1 class="card-title kanitFonts3 textColerHeader">ยินดีต้อนรับ</h1>
    </div>
    <div class="container imageCard">
      <div class="wrapper-full-page marginToTop">
        <div class="form-group">
          <div class="col-sm-6">
            <label class="kanitFonts2 labelStyleInput">ชื่อเข้าระบบ</label>
          </div>
          <input
            type="search"
            class="form-control kanitFonts1 inputStyle"
            placeholder="User Id"
          />
        </div>
        <div class="form-group">
          <div class="col-sm-6">
            <label class="kanitFonts2 labelStyleInput">รหัสผ่าน</label>
          </div>
          <input
            type="search"
            class="form-control kanitFonts1 inputStyle"
            placeholder="Password"
          />
        </div>
        <div class="itemTextCenter">
          <a class="navbar-brand" href="#/admin/account">
            <img
              class="img-responsive imageGotoMainmenu"
              src="img/newImage/BT_Login.png"
              alt="..."
            />
          </a>
        </div>
      </div>
    </div>

    <div class="row justify-content-md-center">
      <div class="col-12 text-center">
        <a class="navbar-brand" href="#/admin/forgot-password">
          <label class="card-title kanitFonts1 textFooterBoxLogin">
            ลืมรหัสผ่าน
          </label>
        </a>
        <a class="navbar-brand" href="#">
          <label class="card-title kanitFonts1 textFooterBoxLogin">
            / ติดต่อเจ้าหน้าที่
          </label>
        </a>
      </div>
    </div>
    <br /><br />

    <div class="row justify-content-md-center">
      <div class="row">
        <div class="col-4">
          <hr class="new5" />
        </div>
        <div class="col-4 text-center">
          <label class="card-title kanitFonts1 textFooterNoAccount">
            ยังไม่มีบัญชี
          </label>
        </div>
        <div class="col-4">
          <hr class="new5" />
        </div>
      </div>
    </div>
    <br /><br />

    <div class="text-center">
      <a class="navbar-brand" href="#/admin/register">
        <img
          class="img-responsive imgRegister"
          src="img/newImage/BT_Register.png"
        />
      </a>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        userId: "  VIP  :  0908566930",
      },
    };
  },
};
</script>
<style lang="scss">
.nav2Styles {
  background-color: black;
}

.textColerHeader {
  color: #ffd373;
  font-size: 35px;

  @media (max-width: 420px) {
    font-size: 28px;
  }
}

.imageCard {
  background-image: url(/img/newImage/BG_Detail01.png);
  background-size: contain no-repeat;
  background-position: center;
  width: 100%;
  border-radius: 10px;

  @media (max-width: 420px) {
    background-size: contain no-repeat;
    background-position: center;
    width: 100%;
    border-radius: 10px;
  }
}

.marginToTop {
  padding-top: 25px;
}

.labelStyleInput {
  width: 100%;
  font-size: 20px;

  @media (max-width: 420px) {
    font-size: 14px;
  }
}

.inputStyle {
  background-color: black;
  border-width: 0px;
  width: 100%;
  color: white;
  font-size: 18px;

  @media (max-width: 420px) {
    border-width: 0px;
    width: 100%;
    color: white;
    font-size: 14px;
  }
}

.imageGotoMainmenu {
  width: 30%;
  margin-top: 10px;

  @media (max-width: 420px) {
    width: 50%;
  }
}

.itemTextCenter {
  text-align: center;
}

.textFooterBoxLogin {
  color: #757575;
  font-size: 22px;

  @media (max-width: 420px) {
    font-size: 14px;
  }
}

.textFooterNoAccount {
  color: #757575;
  font-size: 18px;

  @media (max-width: 420px) {
    font-size: 12px;
    margin-top: 8px;
  }
}
hr.new5 {
  border: 1px solid white;
  border-radius: 0px;

  @media (max-width: 420px) {
    width: 120%;
  }
}

.imgRegister {
  width: 35%;

  @media (max-width: 420px) {
    width: 40%;
  }
}
</style>
