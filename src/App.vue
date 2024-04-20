<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>



<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Alert from './components/alert.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    /* eslint-disable */
    Alert
 
  }

}



</script>
