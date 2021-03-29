<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div :style="imageLogoUser" class="imageLogoUserClass"></div>
        </div>
        <div class="col-lg-9">
          <input
            type="text"
            id="userId"
            disabled
            placeholder="VIP : "
            :style="inputViewUser"
          />
        </div>
      </div>
      <div :style="itemTextCenter">
        <h2 slot="header" class="card-title" :style="textCenter1">
          การสมัครของคุณสำเร็จ
        </h2>
        <div class="col-lg-12">
          <strong :style="textCenter2">
            ขอบคุณสำหรับการสมัครสมาชิก
          </strong>
        </div>
        <div class="col-lg-12">
          <strong slot="header" class="card-title" :style="textCenter2">
            คุณสามารถใช้ชื่อผู้ใช้
          </strong>
        </div>

        <div class="col-lg-12">
          <strong slot="header" class="card-title" :style="textCenter2">
            และรหัสผ่านนี้ เพื่อทำการเข้าสู่ระบบ
          </strong>
        </div>
      </div>
      <br /><br />
      <div :style="imageCard" class="imageClass">
        <div class="wrapper-full-page" :style="marginToTop">
          <div class="form-group">
            <label for="exampleInputEmail1" :style="labelStyleInput"
              >ชื่อเข้าระบบ</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="User Id"
              :style="inputStyle"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" :style="labelStyleInput"
              >รหัสผ่าน</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Password"
              :style="inputStyle"
            />
          </div>
          <div :style="itemTextCenter">
            <a class="navbar-brand" href="#/admin/register">
              <img
                class="avatar border-gray"
                src="img/newImage/BT_GotoMenu.png"
                alt="..."
                :style="imageGotoMainmenu"
              />
            </a>
          </div>
        </div>
      </div>
      <br /><br />
      <br /><br />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav2Styles: {
        backgroundColor: "black"
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
        marginTop: "25px",
        backgroundColor: "#383838",
        borderRadius: "4px"
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
        color: "white"
      },
      marginToTop: {
        paddingTop: "25px"
      },
      labelStyleInput: {
        marginLeft: "25px",
        width: "90%"
      },
      inputStyle: {
        backgroundColor: "black",
        borderWidth: "0px",
        margin: "25px",
        width: "90%"
      },
      imageGotoMainmenu: {
        width: "25%"
      },
      imageCard: {
        backgroundImage: "url(img/newImage/BG_Detail01.png)"
      },
      imageLogoUser: {
        backgroundImage: "url(img/newImage/Profile_Picture.png)"
      }
    };
  }
};
</script>
<style lang="scss">
.imageClass {
  height: 100%;
  width: 100%;
  background-repeat: repeat;
  background-size: contain;

  // @media (max-width: 1200.98px) {
  //   background-size: cover;
  // }

  // @media (max-width: 1500.98px) {
  //   background-size: cover;
  // }
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
