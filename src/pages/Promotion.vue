<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <br />
      <div class="col-sm-12 text-center">
        <h1 class="card-title kanitFonts3" :style="textColerHeader">
          โปรโมชั่น
        </h1>
      </div>
      <!-- list promotions -->
      <div class="container">
        <br />
        <div class="row justify-content-md-center">
          <img
            class="avatar border-gray"
            src="img/newImage/Promotion01.png"
            alt="..."
            :style="imagePromotion"
          />
        </div>
        <br />
        <div class="row justify-content-md-center">
          <img
            class="avatar border-gray"
            src="img/newImage/Promotion02.png"
            alt="..."
            :style="imagePromotion"
          />
        </div>
        <br />
        <div class="row justify-content-md-center">
          <img
            class="avatar border-gray"
            src="img/newImage/Promotion03.png"
            alt="..."
            :style="imagePromotion"
          />
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
      }
    };
  }
};
</script>
<style lang="scss" scoped></style>
