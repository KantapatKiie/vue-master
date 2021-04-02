<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <br />
      <div class="col-sm-12 text-center">
        <h1 class="card-title kanitFonts3" :style="textColerHeader">
          แนะนำเพื่อน
        </h1>
      </div>
      <br /><br />
      <div class="container" :style="imageCardBG">
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-sm-12">
              <h1 class="kanitFonts1">แชร์ลิ้งค์ของคุณ</h1>
            </div>
            <div class="col-sm-12">
              <input
                type="search"
                class="form-control kanitFonts2"
                placeholder="http.//d20gjgs2odnf.coorjd.fn.com"
                :style="inputStyle"
                disabled
              />
            </div>
          </div>
          <br />
          <div class="text-center">
            <a class="navbar-brand" href="#">
              <img
                class="avatar border-gray"
                src="img/newImage/Copys.png"
                alt="Go to main page"
                :style="imageGotoMainmenu"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <a class="navbar-brand" href="#">
            <img
              class="avatar border-gray"
              src="img/newImage/Line.png"
              alt="..."
              :style="imageRowBottom"
            />
          </a>
        </div>
        <div class="col-sm-6">
          <a class="navbar-brand" href="#">
            <img
              class="avatar border-gray"
              src="img/newImage/Facebook.png"
              alt="..."
              :style="imageRowBottom"
            />
          </a>
        </div>
      </div>
      <br /><br /><br />
      <div class="row justify-content-md-center">
        <img
          class="avatar border-gray"
          src="img/newImage/Promotion.png"
          alt="Go to main page"
        />
      </div>
    </div>
  </div>
</template>
<script>
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";

export default {
  components: {
    LTable,
    Card
  },
  data() {
    return {
      nav2Styles: {
        backgroundColor: "black",
        height: "90%"
      },
      textColerHeader: {
        color: "#ffd373"
      },
      imageRowBottom: {
        width: "100%"
      },
      imageCardBG: {
        backgroundImage: "url(img/newImage/BG_Detail01.png)",
        marginTop: "5%",
        marginBottom: "5%",
        backgroundSize: "contain no-repeat",
        // backgroundPosition: "center",
        width: "1016px",
        height: "407px"
      },
      inputStyle: {
        backgroundColor: "black",
        borderWidth: "0px",
        // margin: "25px",
        width: "100%",
        height: "80px",
        color: "white",
        fontSize: "30px"
      }
    };
  }
};
</script>
<style lang="scss" scoped></style>
