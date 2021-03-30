<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <br />
      <div class="col-sm-12 text-center">
        <h2 slot="header" class="card-title kanitFonts3" :style="textColerHeader">
          ฝากเงินอัตโนมัติ
        </h2>
      </div>
      <br />
      <div :style="imageBackgroundMain">
        <div class="col-sm-12">
          <input
            type="text"
            id="userId"
            disabled
            class="kanitFonts1"
            placeholder="ธนาคารไทยพาณิชย์"
            :style="inputBankText"
            v-model="bank.bankName"
          />
          <input
            type="text"
            id="userId"
            disabled
            class="kanitFonts1"
            placeholder="0908566930"
            :style="inputBankText"
            v-model="bank.bankNumber"
          />
          <h4 :style="labelMemoText" class="kanitFonts1">
            *ควรใช้บัญชีข้างบนในการฝากเงินเท่านั้น
          </h4>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-sm-4">
            <img
              class="avatar border-gray"
              src="img/newImage/Text_H01.png"
              alt="..."
              :style="imageDeposit"
            />
          </div>
        </div>
        <br />
        <div class="row justify-content-md-center">
          <div class="col-sm-8">
            <img
              class="avatar border-gray"
              src="img/newImage/SCB_Logo.jpg"
              alt="..."
              :style="imageRowBottom"
            />
          </div>
        </div>
        <br /><br />
        <div class="row justify-content-md-center">
          <div class="col-sm-4">
            <a class="navbar-brand" href="#/admin/register">
              <img
                class="avatar border-gray"
                src="img/newImage/BT_Copy.png"
                alt="..."
                :style="imageRowBottom"
              />
            </a>
          </div>
          <div class="col-sm-4">
            <a class="navbar-brand" href="#/admin/register">
              <img
                class="avatar border-gray"
                src="img/newImage/BT_Check.png"
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
      inputBankText: {
        width: "90%",
        height: "50px",
        margin: "25px",
        backgroundColor: "#212121",
        borderRadius: "4px",
        color: "white",
        fontSize: "25px",
        fontFamily: "kanitFonts1"
      },
      labelMemoText: {
        color: "red",
        fontSize: "20px",
        textAlign: "center"
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
      imageDeposit: {
        width: "100%"
      },
      imageRowBottom: {
        width: "100%"
      }
    };
  }
};
</script>
<style lang="scss">
.imageLogoUserClass {
  background-size: cover;
}
</style>
