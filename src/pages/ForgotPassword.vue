<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <br />
      <div class="col-sm-12 text-center">
        <h1 class="card-title kanitFonts3" :style="textColerHeader">
          ลืมรหัสผ่าน
        </h1>
      </div>
      <div class="container" :style="imageCard">
        <br />

        <div class="wrapper-full-page" :style="marginToTop">
          <div class="col-sm-12">
            <label class="kanitFonts2" :style="labelStyleInput"
              >หมายเลขโทรศัพท์*</label
            >
          </div>
          <input
            type="search"
            class="form-control kanitFonts1"
            placeholder="xxx-xxx-xxxx"
            :style="inputStyle"
          />
          <br />
          <div :style="itemTextCenter">
            <a class="navbar-brand" href="#">
              <img
                class="avatar border-gray"
                src="img/newImage/BT_Password.png"
                alt="..."
                :style="imageGotoPasword"
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
        fontSize: "25px"
      },
      inputStyle: {
        backgroundColor: "black",
        borderWidth: "0px",
        margin: "25px",
        width: "95%",
        height: "70px",
        color: "white",
        fontSize: "28px"
      },
      imageGotoPasword: {
        width: "350px"
      },
      imageCard: {
        backgroundImage: "url(img/newImage/BG_Detail01.png)",
        marginTop: "5%",
        marginBottom: "5%",
        backgroundSize: "contain no-repeat",
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
