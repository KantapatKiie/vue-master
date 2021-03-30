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
            v-model="user.userId"
            :style="inputViewUser"
          />
        </div>
      </div>
      <br />
      <div class="container">
        <h2 slot="header" class="card-title" :style="textCenter">
          ฝากเงินอัตโนมัติ
        </h2>
        <div class="container" :style="imageBorder">
          <div class="col-12">
            <input
              type="text"
              id="userId"
              disabled
              placeholder="ธนาคารไทยพาณิชย์"
              :style="inputBankText"
              v-model="bank.bankName"
            />
            <input
              type="text"
              id="userId"
              disabled
              placeholder="0908566930"
              :style="inputBankText"
              v-model="bank.bankNumber"
            />
            <h4 :style="labelMemoText">
              *ควรใช้บัญชีข้างบนในการฝากเงินเท่านั้น
            </h4>
          </div>

          <div class="row justify-content-md-center">
            <img
              class="avatar border-gray"
              src="img/newImage/Text_H01.png"
              alt="..."
              :style="imageDeposit"
            />
          </div>
          <br />
          <div class="row justify-content-md-center">
            <img
              class="avatar border-gray"
              src="img/newImage/SCB_Logo.jpg"
              alt="..."
              :style="imageBankMain"
            />
          </div>
          <br />
          <div class="row justify-content-md-center">
            <img
              class="avatar border-gray"
              src="img/newImage/BT_Copy.png"
              alt="..."
              :style="imageRowBottom"
            />
            <img
              class="avatar border-gray"
              src="img/newImage/BT_Check.png"
              alt="..."
              :style="imageRowBottom"
            />
          </div>
        </div>
      </div>
    </div>
    <br />
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
        backgroundColor: "black"
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
        fontFamily: "Segoe UI"
      },
      labelMemoText: {
        color: "red",
        fontSize: "20px",
        textAlign: "center"
      },
      textCenter: {
        textAlign: "center",
        color: "#ffd373"
      },
      imageBorder: {
        backgroundImage: "url(img/newImage/backgroungImage.png)",
        width: "100%",
        height: "700px",
        // backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      },
      imageDeposit: {
        width: "250px"
      },
      imageBankMain: {
        width: "500px",
        backgroundSize: "contain"
      },
      imageRowBottom: {
        width: "250px"
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
