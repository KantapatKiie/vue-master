<template>
  <div>
    <br />
    <div class="content">
      <div class="container-fluid">
        <!-- header home -->
        <div class="row">
          <div class="col-xl-3 col-md-6">
            <stats-card>
              <div slot="header" class="icon-danger">
                <i class="nc-icon nc-vector text-danger"></i>
              </div>
              <div slot="content">
                <p class="card-category">Errors</p>
                <h4 class="card-title">23</h4>
              </div>
              <div slot="footer"><i class="fa fa-clock-o"></i>Last day</div>
            </stats-card>
          </div>

          <div class="col-xl-3 col-md-6">
            <stats-card>
              <div slot="header" class="icon-info">
                <i class="nc-icon nc-favourite-28 text-primary"></i>
              </div>
              <div slot="content">
                <p class="card-category">Followers</p>
                <h4 class="card-title">+45</h4>
              </div>
              <div slot="footer"><i class="fa fa-refresh"></i>Updated now</div>
            </stats-card>
          </div>
        </div>

        <!-- body -->
        <card>
          <h4 slot="header" class="card-title">ข้อมูลการสมัครสมาชิกใหม่</h4>
          <form>
            <div class="col-md-12">
              <div>
                <label class="control-label">
                  Account Bank
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
                label="Account Number"
                placeholder="Account number"
                v-model="user.banknumber"
              >
              </base-input>
              <base-input
                type="text"
                label="Full name (Account bank)"
                placeholder="fullname"
                v-model="user.fullname"
              >
              </base-input>
              <base-input
                type="number"
                label="Telephone Number"
                placeholder="telephone number"
                v-model="user.telephone"
              >
              </base-input>
              <base-input
                type="password"
                label="Password Login"
                placeholder="password login"
                v-model="user.password"
              >
              </base-input>
              <base-input
                type="password"
                label="Password Secure"
                placeholder="password secure"
                v-model="user.passwordSC"
              >
              </base-input>
              <div>
                <label class="control-label">
                  Know us
                </label>
                <select v-model="user.knowus" class="form-select">
                  <option disabled value="1">Please select one</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div>
                <label class="control-label">
                  Promotions
                </label>
                <select v-model="user.promotion" class="form-select">
                  <option disabled value="1">Please select promotion</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>

              <!-- button register -->
              <br />
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-info btn-fill float-right"
                  @click.prevent="register"
                >
                  Update Profile
                </button>
              </div>

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
            <br />
            <div class="clearfix"></div>
          </form>
        </card>
      </div>
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
        banknumber: "1",
        fullname: "",
        telephone: "",
        password: "",
        passwordSC: "",
        promotion: null,
        knowus: "1",
        promotion: "1",
        aboutMe: ""
      },
      myStyle: {
        backgroundColor: "black"
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
