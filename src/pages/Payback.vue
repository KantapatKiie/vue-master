<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container-fluid">
      <br />
      <div class="col-sm-12 text-center">
        <h1 class="card-title kanitFonts3" :style="textColerHeader">
          คืนยอดเสีย
        </h1>
      </div>
      <br />
      <div class="container" :style="imageCardBG">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-7">
              <h1 class="kanitFonts1">เครดิต</h1>
              <h1 class="kanitFonts3" :style="moneyBox">100,000.00</h1>
            </div>
            <div class="col-sm-5 text-end">
              <a class="navbar-brand" href="#">
                <img
                  class="img-responsive center-block d-block mx-auto"
                  src="img/newImage/BT_Cashback1.png"
                />
              </a>
            </div>
          </div>
        </div>
        <br /><br /><br /><br />
        <div class="container">
          <div class="row justify-content-md-start">
            <div class="col-sm-12">
              <h3 class="kanitFonts1" :style="textCreditbox">
                * รายการอัพเดต 24 ชั่วโมง
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="container" :style="imageBackgroundMain">
        <div class="col-sm-12 text-center">
          <h1 class="card-title kanitFonts3" :style="textColerHeader">
            ประวัติคืนยอดเสีย
          </h1>
        </div>
        <div class="container">
          <br />
          <br />
          <div class="row">
            <div class="col-sm-9">
              <label class="kanitFonts2" :style="textTableHeader">
                รายการวันนี้
                <i class="kanitFonts2" :style="textDateHeader">
                  02/04/2564
                </i>
              </label>
            </div>
            <div class="col-sm-3">
              <select
                class="select kanitFonts3"
                v-model="mock.days"
                :style="dateSortTable"
              >
                <option disabled value="0">วันที่</option>
                <option value="1">ภายใน 3 วัน</option>
                <option value="2">ภายใน 7 วัน</option>
              </select>
            </div>
          </div>
          <br />
          <img
            class="img-responsive center-block d-block mx-auto"
            src="img/newImage/lineInput.jpg"
            :style="listInputStyle"
          />
          <br />
          <div class="row">
            <label class="kanitFonts2" :style="textDatatable">
              ไม่พบข้อมูล
            </label>
          </div>
        </div>
      </div>
      <br /><br />
      <div class="row justify-content-md-center">
        <div class="col-sm-12 text-center">
          <a class="navbar-brand" href="#">
            <img
              class="avatar border-gray"
              src="img/newImage/BT_Deposit1.png"
            />
          </a>
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
      mock: {
        days: 0
      },
      nav2Styles: {
        backgroundColor: "black",
        height: "82%"
      },
      textColerHeader: {
        color: "#ffd373"
      },
      imageRowBottom: {
        width: "100%"
      },
      imageCardBG: {
        backgroundImage: "url(img/newImage/BG_Detail01.png)",
        marginBottom: "5%",
        backgroundSize: "contain no-repeat",
        width: "1016px",
        height: "407px"
      },
      imageBackgroundMain: {
        backgroundImage: "url(img/newImage/backgroungImage.png)",
        width: "100%",
        height: "500px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      },
      listInputStyle: {
        width: "100%",
        maxWidth: "100%"
      },
      moneyBox: {
        color: "black",
        fontSize: "70px"
      },
      textTableHeader: {
        color: "#ffca45",
        fontSize: "28px"
      },
      textDateHeader: {
        color: "white",
        fontSize: "28px"
      },
      textDatatable: {
        color: "white",
        fontSize: "28px"
      },
      textCreditbox: {
        color: "red"
      },
      dateSortTable: {
        backgroundImage: "url(img/newImage/BT_Choose.png)",
        height: "50px",
        width: "220px",
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
