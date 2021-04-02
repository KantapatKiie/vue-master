<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <br />
      <div class="col-sm-12 text-center">
        <h1 class="card-title kanitFonts3" :style="textColerHeader">
          ถอนเงิน
        </h1>
      </div>
      <div class="container" :style="imageCardBG1">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-sm-12">
              <h1 class="kanitFonts1">เครดิตคงเหลือ</h1>
              <h1 class="kanitFonts3">0.00 ฿</h1>
            </div>
          </div>
          <br /><br /><br />
          <br /><br /><br />
        </div>
        <div class="container">
          <div class="row justify-content-start">
            <h3 class="kanitFonts1" :style="textCreditbox">
              เครดิตของคุณไม่เพียงพอสำหรับการถอนเงิน
            </h3>
          </div>
        </div>
      </div>

      <div class="container" :style="imageCardBG2">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-sm-12">
              <h1 class="kanitFonts1">จำนวนเงินที่ต้องการถอน</h1>
              <input
                class="kanitFonts2"
                placeholder="0.00"
                type="search"
                :style="inputStyle"
              />
            </div>
          </div>
        </div>
        <br />
        <div class="container">
          <div class="row justify-content-start">
            <h3 class="kanitFonts1" :style="textCreditbox">
              เพื่อความรวดเร็วในการถอน แนะนำให้ใช้ธนาคารเดียวกันกับที่ฝากเงิน
            </h3>
          </div>
        </div>
      </div>
      <br />
      <div class="col-sm-12 text-center">
        <h1 class="card-title kanitFonts3" :style="textColerHeader">
          บัญชีรับเงิน
        </h1>
      </div>
      <div class="container" :style="imageBackgroundMain">
        <div class="container">
          <br /><br />
          <div class="row justify-content-md-start">
            <div class="col-sm-3">
              <img
                class="avatar border-gray"
                src="img/newImage/SCB_Logo.jpg"
                alt="..."
                :style="imageRowBottom"
              />
            </div>
            <div class="col-sm-6 text-start">
              <h3 class="kanitFonts1" :style="textBankHeader1">
                ธนาคารไทยพาณิชย์
              </h3>
              <h3 class="kanitFonts2" :style="textBankHeader2">
                09085666930
              </h3>
              <h3 class="kanitFonts1" :style="textBankHeader1">
                ชื่อบัญชี : น.ส.ตัวอย่าง ตัวอย่าง
              </h3>
            </div>

            <div class="col-sm-3">
              <select
                class="select kanitFonts3"
                v-model="bank.days"
                :style="dateSortTable"
              >
                <option disabled value="0">เลือกบัญชี</option>
                <option value="1">ภายใน 3 วัน</option>
                <option value="2">ภายใน 7 วัน</option>
              </select>
            </div>
          </div>
          <br /><br />
          <div class="row justify-content-md-center">
            <div class="col-sm-12 text-center">
              <a class="navbar-brand" href="#">
                <img
                  class="avatar border-gray"
                  src="img/newImage/BT_CF.png"
                  alt="..."
                />
              </a>
            </div>
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
      bank: {
        bankName: "   ธนาคารไทยพาณิชย์",
        bankNumber: "   0908566930",
        days: 0
      },
      nav2Styles: {
        backgroundColor: "black",
        height: "82%"
      },
      textColerHeader: {
        color: "#ffd373"
      },
      textCreditbox: {
        color: "red"
      },
      textBottomBoxcredit: {
        color: "#ffca45",
        fontSize: "22px"
      },
      textBankHeader1: {
        color: "white",
        fontSize: "32px"
      },
      textBankHeader2: {
        color: "white",
        fontSize: "50px"
      },
      imageBackgroundMain: {
        backgroundImage: "url(img/newImage/backgroungImage.png)",
        width: "100%",
        height: "500px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
        // backgroundPosition: "center",
      },
      imageDeposit: {
        width: "100%"
      },
      imageRowBottom: {
        width: "100%"
      },
      imageCardBG1: {
        backgroundImage: "url(img/newImage/BG_Detail01.png)",
        marginTop: "5%",
        marginBottom: "5%",
        backgroundSize: "contain no-repeat",
        // backgroundPosition: "center",
        width: "1016px",
        height: "407px"
      },
      imageCardBG2: {
        backgroundImage: "url(img/newImage/BG_Detail02.png)",
        marginTop: "5%",
        marginBottom: "5%",
        backgroundSize: "no-repeat",
        // backgroundPosition: "center",
        width: "1016px",
        height: "290px"
      },
      inputStyle: {
        backgroundColor: "black",
        borderWidth: "0px",
        width: "100%",
        height: "70px",
        color: "white",
        fontSize: "50px"
      },
      dateSortTable: {
        backgroundImage: "url(img/newImage/BT_Choose.png)",
        height: "50px",
        width: "190px",
        fontSize: "25px"
      }
    };
  }
};
</script>
<style lang="scss">
select {
  padding-right: 30px !important;
  background: #ebc467 url("/images/BT_Choose.png") no-repeat calc(100% - 10px)
    center;
  -webkit-appearance: none;
  -webkit-border-radius: 2px;
  -webkit-padding-end: 30px;
  -webkit-padding-start: 9px;
  -moz-appearance: none;
  -moz-padding-end: 30px;
  -moz-padding-start: 9px;
  border-radius: 6px;
  border: 0px;
}
</style>
