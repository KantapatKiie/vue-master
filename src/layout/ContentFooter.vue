<template>
  <footer class="navbar mr-auto" :style="navBars">
    <div class="container-fluid">
      <a class="navbar-brand" href="#/admin/account" :style="menuList"
        ><img
          class="avatar border-gray"
          src="img/newImage/BT_Account.png"
          alt="..."
          :style="menuListImage"
      /></a>
      <a class="navbar-brand" href="#/admin/deposit-money" :style="menuList"
        ><img
          class="avatar border-gray"
          src="img/newImage/BT_Deposit.png"
          alt="..."
          :style="menuListImage2"
      /></a>
      <a class="navbar-brand" href="#/admin/register" :style="menuList"
        ><img
          class="avatar border-gray"
          src="img/newImage/BT_Withdraw.png"
          alt="..."
          :style="menuListImage2"
      /></a>
      <a class="navbar-brand" href="#/admin/confirm-register" :style="menuList"
        ><img
          class="avatar border-gray"
          src="img/newImage/BT_History.png"
          alt="..."
          :style="menuListImage"
      /></a>
      <a class="navbar-brand" href="#/admin/icons" :style="menuList"
        ><img
          class="avatar border-gray"
          src="img/newImage/BT_Contact.png"
          alt="..."
          :style="menuListImage"
      /></a>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      navBars: {
        backgroundColor: "#383838"
      },
      menuList: {
        color: "#828282"
      },
      menuListImage: {
        width: "30px"
      },
      menuListImage2: {
        width: "40px"
      }
    };
  }
};
</script>
<style></style>
