<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <br /><br />
      <div :style="imageCard" class="container">
        <div class="wrapper-full-page" :style="marginToTop">
          <div class="form-group">
            <div class="col-sm-6">
              <label for="exampleInputEmail1" :style="labelStyleInput"
                >เบอร์โทรศัพท์</label
              >
            </div>
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
            <div class="col-sm-6">
              <label for="exampleInputEmail1" :style="labelStyleInput"
                >รหัสผ่าน</label
              >
            </div>
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
        marginTop: "25px",
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
        color: "white"
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
        width: "90%",
        color: "white"
      },
      imageGotoMainmenu: {
        width: "25%"
      },
      imageCard: {
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: "url(img/newImage/BG_Detail01.png)"
      },
      imageLogoUser: {
        backgroundImage: "url(img/newImage/Profile_Picture.png)"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
// .imageLogoUserClass {
//   height: 120px;
//   width: 120px;
//   background-repeat: no-repeat;
//   background-size: cover;
//   @media (max-width: 988px) {
//     background-size: cover;
//   }
// }
</style>
