<template>
  <div class="card-body" :style="nav2Styles">
    <br />
    <div class="container-fluid">
      <h2 slot="header" class="card-title kanitFonts3" :style="textCenter">
        ยินดีต้อนรับ
      </h2>
      <h4 slot="header" class="card-title kanitFonts3" :style="textCenter">
        ข้อมูลการสมัครสมาชิกใหม่
      </h4>
    </div>
    <br />
    <div class="card-body">
      <form>
        <div class="col-lg-12">
          <div class="form-group-lg" :style="boxPDStyles">
            <div class="row">
              <div class="col-sm-12">
                <div :style="inputGroupStyle">
                  <div class="custom-select kanitFonts1">
                    <select
                      class="custom-select kanitFonts1"
                      v-model="user.accbank"
                      :style="selectTextColor"
                    >
                      <option disabled value="1">ธนาคารที่ใช้</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/lineInput.jpg"
              :style="listInputStyle"
            />
          </div>

          <div class="form-group" :style="boxPDStyles">
            <div class="row">
              <div class="col-sm-12">
                <div :style="inputGroupStyle">
                  <input
                    type="search"
                    class="kanitFonts2"
                    placeholder=" เลขที่บัญชี.."
                    maxlength="16"
                    v-model="user.banknumber"
                    :style="inputBlackBoxStyle"
                  />
                </div>
              </div>
            </div>
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/lineInput.jpg"
              :style="listInputStyle"
            />
          </div>

          <div class="form-group" :style="boxPDStyles">
            <div class="row">
              <div class="col-sm-12">
                <div :style="inputGroupStyle">
                  <input
                    type="search"
                    class="kanitFonts2"
                    placeholder=" ชื่อ - นามสกุล (ชื่อบัญชีธนาคาร)"
                    v-model="user.fullname"
                    :style="inputBlackBoxStyle"
                  />
                </div>
              </div>
            </div>
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/lineInput.jpg"
              :style="listInputStyle"
            />
          </div>

          <div class="form-group" :style="boxPDStyles">
            <div class="row">
              <div class="col-sm-12">
                <div :style="inputGroupStyle">
                  <input
                    type="search"
                    class="kanitFonts2"
                    placeholder=" เบอร์โทรศัพท์"
                    maxlength="10"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    v-model="user.telephone"
                    required
                    :style="inputBlackBoxStyle"
                  />
                </div>
              </div>
            </div>
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/lineInput.jpg"
              :style="listInputStyle"
            />
          </div>

          <div class="form-group" :style="boxPDStyles">
            <div class="row">
              <div class="col-sm-12">
                <div :style="inputGroupStyle">
                  <input
                    type="search"
                    class="kanitFonts2"
                    placeholder=" รหัสเข้าเล่น (ล็อกอินเข้าสู่ระบบ)"
                    v-model="user.password"
                    :style="inputBlackBoxStyle"
                  />
                </div>
              </div>
            </div>
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/lineInput.jpg"
              :style="listInputStyle"
            />
          </div>

          <div class="form-group-lg" :style="boxPDStyles">
            <div class="row">
              <div class="col-sm-12">
                <div :style="inputGroupStyle">
                  <div class="custom-select kanitFonts1">
                    <select
                      class="custom-select kanitFonts1"
                      v-model="user.knowus"
                      :style="selectTextColor"
                    >
                      <option disabled value="1">รู้จักเราที่ไหน ?</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/lineInput.jpg"
              :style="listInputStyle"
            />
          </div>

          <div class="form-group-lg" :style="boxPDStyles">
            <div class="row">
              <div class="col-sm-12">
                <div :style="inputGroupStyle">
                  <div class="custom-select kanitFonts1">
                    <select
                      class="custom-select kanitFonts1"
                      v-model="user.promotion"
                      :style="selectTextColor"
                    >
                      <option disabled value="1">โปรโมชั่น ?</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="img-responsive center-block d-block mx-auto"
              src="img/newImage/lineInput.jpg"
              :style="listInputStyle"
            />
          </div>

          <!-- button register -->
          <br /><br />
          <br /><br />
          <div class="text-center">
            <a class="navbar-brand" href="#/admin/confirm-register">
              <img
                @click.prevent="register"
                class="img-responsive"
                src="img/newImage/register-01.png"
                :style="imgRegister"
              />
            </a>
          </div>
          <br />
          <div class="row text-center">
            <label class="control-label kanitFonts1" :style="textMemo">
              <span :style="colorSpan">*</span>
              กรุณากรอกข้อมูลให้ครบทุกช่อง
            </label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import ChartCard from "src/components/Cards/ChartCard.vue";
import StatsCard from "src/components/Cards/StatsCard.vue";
import LTable from "src/components/Table.vue";

export default {
  components: {
    LTable,
    ChartCard,
    StatsCard
  },
  data() {
    return {
      user: {
        accbank: "1",
        banknumber: "",
        fullname: "",
        telephone: "",
        password: "",
        promotion: null,
        knowus: "1",
        promotion: "1",
        aboutMe: ""
      },

      nav2Styles: {
        backgroundColor: "black",
        height: "100%"
      },
      textCenter: {
        textAlign: "center",
        color: "#ffd373"
      },
      imgRegister: {
        width: "250px"
      },
      colorSpan: {
        color: "red"
      },
      textMemo: {
        color: "#828282",
        fontSize:"20px"
      },
      //form-StyleInput & StyleSelect
      boxPDStyles: {
        marginTop: "25px",
      },
      inputGroupStyle: {
        backgroundColor: "black",
        width: "100%",
        height: "40px",
      },
      inputBlackBoxStyle: {
        backgroundColor: "black",
        borderWidth: "0px",
        color: "white",
        width: "100%",
        height: "40px",
        fontSize: "20px"
      },
      listInputStyle: {
        width: "100%",
        maxWidth: "100%"
      },
      selectTextColor: {
        color: "#828282"
      }
    };
  },
  methods: {
    register() {
      alert("register data: " + JSON.stringify(this.user));
    }
  }
};
</script>
<style lang="scss">
.custom-select {
  position: relative;
  height: 40px;
  width: 100%;
  color: white;
  display: inline-block;
  appearance: none;
}

.custom-select select {
  height: 40px;
  // color: white !important;
  font-size: 20px;
  border-color: black;
  background-color: black !important;
  text-transform: uppercase;
  outline: none;
  appearance: none;
}
.custom-select::after {
  content: "";
  position: absolute;
  right: 10px;
  top: 17px;
  width: 0;
  height: 0;
  border-left: 7px solid black;
  border-right: 7px solid black;
  border-top: 10px solid #fac234;
  pointer-events: none;
  appearance: none;
  color: white;
}
</style>
