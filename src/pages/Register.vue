<template>
  <div class="card-body" :style="backImage">
    <br />
    <div class="container-fluid">
      <h2 slot="header" class="card-title" :style="textCenter">
        ยินดีต้อนรับ
      </h2>
      <h4 slot="header" class="card-title" :style="textCenter">
        ข้อมูลการสมัครสมาชิกใหม่
      </h4>
    </div>
    <br />
    <div class="card-body">
      <form>
        <div class="col-md-12">
          <div>
            <label class="control-label" :style="textMemo">
              ธนาคารที่ใช้
            </label>
            <select v-model="user.accbank" class="form-select">
              <option disabled value="1">Please select bank</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <base-input
            type="number"
            label="เลขที่บัญชี (Account no. bank)"
            placeholder="เลขที่บัญชี"
            v-model="user.banknumber"
            :style="textMemo"
          >
          </base-input>
          <base-input
            type="text"
            label="ชื่อ - นามสกุล (Account name bank)"
            placeholder="ชื่อ และนามสกุล"
            v-model="user.fullname"
            :style="textMemo"
          >
          </base-input>
          <base-input
            type="number"
            label="เบอร์โทรศัพท์"
            placeholder="เบอร์โทรศัพท์"
            v-model="user.telephone"
            :style="textMemo"
          >
          </base-input>
          <base-input
            type="password"
            label="รหัสเข้าเล่น (ล็อกอินเข้าสู่ระบบ)"
            placeholder="รหัสเข้าเล่น"
            v-model="user.password"
            :style="textMemo"
          >
          </base-input>
          <div>
            <label class="control-label" :style="textMemo">
              รู้จักเราที่ไหน ?
            </label>
            <select v-model="user.knowus" class="form-select">
              <option disabled value="1">Please select</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <div>
            <label class="control-label" :style="textMemo">
              โปรโมชั่น
            </label>
            <select v-model="user.promotion" class="form-select">
              <option disabled value="1">Please select promotion</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>

          <!-- button register -->
          <br /><br /><br />
          <div class="text-center">
            <a class="navbar-brand" href="#/admin/register">
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
            <label class="control-label" :style="textMemo">
              <span :style="colorSpan">*</span>
              กรุณากรอกข้อมูลให้ครบทุกช่อง
            </label>
          </div>
          <br /><br />

          <!-- <div class="form-group">
                <label>About Me</label>
                <textarea
                  rows="5"
                  class="form-control border-input"
                  placeholder="Here can be your description"
                  v-model="user.aboutMe"
                >
                </textarea>
              </div> -->
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

      backImage: {
        backgroundColor: "black"
      },
      textCenter: {
        textAlign: "center",
        color: "#ffd373"
      },
      imgRegister: {
        width: "150px"
      },
      colorSpan: {
        color: "red"
      },
      textMemo: {
        color: "#828282"
      },
      editTooltip: "Edit Task",
      deleteTooltip: "Remove",
      pieChart: {
        data: {
          labels: ["40%", "20%", "40%"],
          series: [40, 20, 40]
        }
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
<style></style>
