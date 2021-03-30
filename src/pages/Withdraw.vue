<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <br />
      <div class="col-sm-12 text-center">
        <h2 slot="header" class="card-title kanitFonts3" :style="textColerHeader">
          ถอนเงิน
        </h2>
      </div>
      <br />
      <div :style="imageBackgroundMain">
        
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
      user: {
        userId: "  VIP  :  0908566930"
      },
      bank: {
        bankName: "   ธนาคารไทยพาณิชย์",
        bankNumber: "   0908566930"
      },
      nav2Styles: {
        backgroundColor: "black",
        height: "100%"
      },
      imageLogoUser: {
        backgroundImage: "url(img/newImage/Profile_Picture.png)"
      },
      inputViewUser: {
        width: "90%",
        height: "45%",
        marginTop: "25px",
        backgroundColor: "#383838",
        borderRadius: "4px",
        color: "white"
      },
      textColerHeader: {
        color: "#ffd373"
      },
      imageBackgroundMain: {
        backgroundImage: "url(img/newImage/backgroungImage.png)",
        width: "100%",
        height: "700px",
        // backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      },
    };
  }
};
</script>
<style lang="scss">
.imageLogoUserClass {
  background-size: cover;
}
</style>
