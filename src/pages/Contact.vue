<template>
  <div class="card-body nav2Styles">
    <div class="col-sm-12 text-center">
      <h1 class="card-title kanitFonts3 textColerHeader">ติดต่อเรา</h1>
    </div>
    <div class="container">
      <br />
      <div class="row justify-content-md-center">
        <div class="col-6 text-center">
          <a class="navbar-brand" href="#">
            <img
              class="img-responsive imageButton"
              src="img/newImage/BT_Line.png"
              alt="..."
            />
          </a>
        </div>
        <div class="col-6 text-center">
          <a class="navbar-brand" href="#">
            <img
              class="img-responsive imageButton"
              src="img/newImage/BT_Tell.png"
              alt="..."
            />
          </a>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";

export default {
  components: {
    LTable,
    Card,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.nav2Styles {
  background-color: black;
}
.textColerHeader {
  color: #ffd373;
}
.imageBackgroundMain {
  background-image: url(/img/newImage/backgroungImage.png);
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 420px) {
    // font-size: 24px;
  }
}

.imageButton {
  width: 80%;
  @media (max-width: 420px) {
    width: 100%;
  }
}
</style>
