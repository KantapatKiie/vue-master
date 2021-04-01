<template>
  <footer class="navbar mr-auto" :style="backgrondFooter">
    <div class="container-fluid">
      <a class="navbar-brand" href="#/admin/account" :style="menuList"
        ><img
          class="avatar border-gray"
          src="img/newImage/BT_Account.png"
          alt="..."
      /></a>
      <a class="navbar-brand" href="#/admin/deposit-money" :style="menuList"
        ><img
          class="avatar border-gray"
          src="img/newImage/BT_Deposit.png"
          alt="..."
      /></a>
      <a class="navbar-brand" href="#/admin/withdraw-money" :style="menuList"
        ><img
          class="avatar border-gray"
          src="img/newImage/BT_Withdraw.png"
          alt="..."
      /></a>
      <a class="navbar-brand" href="#/admin/register" :style="menuList"
        ><img
          class="avatar border-gray"
          src="img/newImage/BT_History.png"
          alt="..."
      /></a>
      <a class="navbar-brand" href="#/admin/confirm-register" :style="menuList"
        ><img
          class="avatar border-gray"
          src="img/newImage/BT_Contact.png"
          alt="..."
      /></a>
    </div>
  </footer>
</template>
<script>
export default {
  name: "contcontent-footerent",
  data() {
    return {
      backgrondFooter: {
        backgroundImage: "url(img/newImage/BG_Menubar.jpg)",
        backgroundSize: "contain",
        backgroundSize: "no-repeat",
        width: "100%"
      },
      menuList: {
        color: "#828282"
      }
    };
  }
};
</script>
<style lang="scss" scoped></style>
