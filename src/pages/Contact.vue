<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <br />
      <div class="col-sm-12 text-center">
        <h1 class="card-title kanitFonts3" :style="textColerHeader">
          ติดต่อเรา
        </h1>
      </div>
      <div class="container">
        <br /><br />
        <div class="row justify-content-md-center">
          <div class="col-sm-12 text-center">
            <a class="navbar-brand" href="#">
              <img
                class="avatar border-gray"
                src="img/newImage/BT_Line.png"
                alt="..."
              />
            </a>
          </div>
        </div>
        <br /><br />
        <div class="row justify-content-md-center">
          <div class="col-sm-12 text-center">
            <a class="navbar-brand" href="#">
              <img
                class="avatar border-gray"
                src="img/newImage/BT_Tell.png"
                alt="..."
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
      imageBackgroundMain: {
        backgroundImage: "url(img/newImage/backgroungImage.png)",
        width: "100%",
        height: "500px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      },
    };
  }
};
</script>
<style lang="scss" scoped></style>
