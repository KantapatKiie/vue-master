<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{ path: '/admin' }">Bottom bars</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      activeNotifications: false,
      bottomBars: {
        color: "black",
        width: 150,
        heigth: 150
      }
    };
  }
};
</script>
<style></style>
