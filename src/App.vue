<template>
  <main>
    <navbar></navbar>
    <section>
      <home-page></home-page>
    </section>
    <!-- <Footer></Footer> -->
  </main>
</template>

<script>
import HomePage from "./views/home/index.vue";
import Navbar from "./components/common/navbar/index.vue";
// import Footer from "./components/common/footer/index.vue";
export default {
  name: "App",
  components: {
    HomePage,
    Navbar,
    // Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
