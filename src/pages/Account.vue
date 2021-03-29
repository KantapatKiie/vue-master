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
            disabled
            placeholder="VIP : "
            :style="inputViewUser"
          />
        </div>
      </div>
      <br /><br />
      <!-- menu-list1 -->
      <div class="row justify-content-md-center" :style="pdMenuList1">
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="avatar border-gray"
              src="img/newImage/icon_01.png"
              alt="..."
              :style="imageMenuList"
            />
          </a>
        </div>
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="avatar border-gray"
              src="img/newImage/icon_02.png"
              alt="..."
              :style="imageMenuList"
            />
          </a>
        </div>
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="avatar border-gray"
              src="img/newImage/icon_03.png"
              alt="..."
              :style="imageMenuList"
            />
          </a>
        </div>
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="avatar border-gray"
              src="img/newImage/icon_04.png"
              alt="..."
              :style="imageMenuList"
            />
          </a>
        </div>
      </div>

      <!-- main-price -->
      <div :style="imageCard" class="container ">
        <div class="container">
          <div class="row ">
            <div class="row justify-content-between col">
              <div class="col">
                <h2>รายการเครดิต</h2>

                <h2 slot="header" class="card-title" :style="textCenter2">
                  100,000.00 ฿
                </h2>
                <br />
              </div>
              <div class="col-sm-3">
                <a class="navbar-brand" href="#/admin/register">
                  <img
                    class="avatar border-gray"
                    src="img/newImage/BT_Gotoplay.png"
                    :style="openGameImage"
                  />
                </a>
              </div>
            </div>
            <h4>คำอธิบายรายละเอียดรายการเครดิต</h4>
            <h5>
              เพื่อความรวดเร็วในการทำการถอน แนะนำให้ใช้ธนาคารเดียวกับที่ฝากเงิน
            </h5>
          </div>
        </div>
      </div>

      <!-- menu-list2 -->
      <div class="row justify-content-md-center" :style="pdMenuList2">
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="avatar border-gray"
              src="img/newImage/icon_05.png"
              alt="..."
              :style="imageMenuList2"
            />
          </a>
        </div>
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="avatar border-gray"
              src="img/newImage/icon_06.png"
              alt="..."
              :style="imageMenuList21"
            />
          </a>
        </div>
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="avatar border-gray"
              src="img/newImage/icon_07.png"
              alt="..."
              :style="imageMenuList2"
            />
          </a>
        </div>
      </div>
      <div class="row justify-content-md-center" :style="pdMenuList2">
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="avatar border-gray"
              src="img/newImage/icon_08.png"
              alt="..."
              :style="imageMenuList2"
            />
          </a>
        </div>
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="avatar border-gray"
              src="img/newImage/icon_09.png"
              alt="..."
              :style="imageMenuList2"
            />
          </a>
        </div>
        <div class="col-sm">
          <a class="navbar-brand" href="#/admin/register">
            <img
              class="avatar border-gray"
              src="img/newImage/icon_010.png"
              alt="..."
              :style="imageMenuList2"
            />
          </a>
        </div>
      </div>
    </div>
    <br /><br />
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
        borderRadius: "4px"
      },
      imageCard: {
        backgroundImage: "url(img/newImage/BG_Detail01.png)",
        marginTop: "50px",
        marginBottom: "50px",
        backgroundSize: "contain",
        // backgroundPosition:"center",
        width: "100%",
        height: "auto"
      },
      imageMenuList: {
        width: "70px",
        marginLeft: "50px"
      },
      imageMenuList2: {
        width: "70px"
      },
      imageMenuList21: {
        width: "115px",
        marginLeft: "-20px"
      },
      pdMenuList1: {
        marginLeft: "15px",
        marginBottom: "50px"
      },
      pdMenuList2: {
        marginLeft: "120px",
        marginBottom: "50px"
      },
      openGameImage: {
        width: "170px"
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
