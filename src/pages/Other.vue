<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <br />
      <div class="col-sm-12 text-center">
        <h1 class="card-title kanitFonts3" :style="textColerHeader">
          อื่นๆ
        </h1>
      </div>
      <br />
        <div class="container" :style="imageBackgroundMain">
          <br />
          <br />
          <div class="row justify-content-md-center">
            <div class="col-sm-6">
              <a class="navbar-brand" href="#">
                <img
                  class="avatar border-gray"
                  src="img/newImage/BT_01.png"
                  alt="..."
                  :style="imageRowBottom"
                />
              </a>
            </div>
            <div class="col-sm-6">
              <a class="navbar-brand" href="#">
                <img
                  class="avatar border-gray"
                  src="img/newImage/BT_02.png"
                  alt="..."
                  :style="imageRowBottom"
                />
              </a>
            </div>
          </div>
          <br/>
          <div class="row justify-content-md-center">
            <div class="col-sm-6">
              <a class="navbar-brand" href="#">
                <img
                  class="avatar border-gray"
                  src="img/newImage/BT_03.png"
                  alt="..."
                  :style="imageRowBottom"
                />
              </a>
            </div>
            <div class="col-sm-6">
              <a class="navbar-brand" href="#">
                <img
                  class="avatar border-gray"
                  src="img/newImage/BT_04.png"
                  alt="..."
                  :style="imageRowBottom"
                />
              </a>
            </div>
          </div>
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
      imageBackgroundMain: {
        backgroundImage: "url(img/newImage/backgroungImage.png)",
        width: "100%",
        height: "900px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      },
    };
  }
};
</script>
<style lang="scss" scoped></style>
