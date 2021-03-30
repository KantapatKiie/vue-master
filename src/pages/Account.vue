<template>
  <div class="card-body" :style="nav2Styles">
    <div class="container">
      <br /><br />
      <!-- menu-list1 -->
      <div class="row justify-content-md-center" :style="pdMenuList1">
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/icon_01.png"
              alt="..."
            />
          </a>
        </div>
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/icon_02.png"
              alt="..."
            />
          </a>
        </div>
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/icon_03.png"
              alt="..."
            />
          </a>
        </div>
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/icon_04.png"
              alt="..."
            />
          </a>
        </div>
      </div>

      <!-- main-price -->
      <div :style="imageCardBG" class="container">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-sm-8">
              <h1 class="kanitFonts1">รายการเครดิต</h1>
              <h1 class="kanitFonts3">100,000.00 ฿</h1>
            </div>
            <div class="col-sm-3">
              <a class="navbar-brand" href="#/admin/register">
                <img
                  class="img-responsive center-block d-block mx-auto"
                  src="img/newImage/BT_Gotoplay.png"
                  :style="openGameImage"
                />
              </a>
            </div>
          </div>
          <br /><br /><br />
          <div class="row justify-content-start">
            <h3 class="kanitFonts2">คำอธิบายรายละเอียดรายการเครดิต</h3>
            <h3 class="kanitFonts2">
              เพื่อความรวดเร็วในการทำการถอน แนะนำให้ใช้ธนาคารเดียวกับที่ฝากเงิน
            </h3>
          </div>
        </div>
      </div>

      <!-- menu-list2 -->
      <br />
      <div class="row justify-content-md-center" :style="pdMenuList2">
        <div class="col-sm-4 ">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/icon_05.png"
              alt="..."
            />
          </a>
        </div>
        <div class="col-sm-4">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/icon_06.png"
              alt="..."
            />
          </a>
        </div>
        <div class="col-sm-4">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/icon_07.png"
              alt="..."
            />
          </a>
        </div>
      </div>
      <div class="row justify-content-md-center" :style="pdMenuList2">
        <div class="col-sm-4">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/icon_08.png"
              alt="..."
            />
          </a>
        </div>
        <div class="col-sm-4">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/icon_09.png"
              alt="..."
            />
          </a>
        </div>
        <div class="col-sm-4">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/icon_010.png"
              alt="..."
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
      user: {
        userId: "  VIP  :  0908566930"
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
      imageCardBG: {
        backgroundImage: "url(img/newImage/BG_Detail01.png)",
        marginTop: "5%",
        marginBottom: "5%",
        backgroundSize: "contain",
        // backgroundPosition: "center",
        backgroundSize: "no-repeat",
        width: "1016px",
        height: "407px"
      },
      pdMenuList1: {
        marginTop: "50px",
        marginBottom: "25px"
      },
      pdMenuList2: {
        marginBottom: "25px"
      },
      openGameImage: {
        width: "100%",
        marginTop: "5%"
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
