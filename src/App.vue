<template>
  <div id="app">
    <Header></Header>
    <transition name="slide-fade" mode="out-in" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
      <div>
        <router-view />
      </div>
    </transition>
    <Footer></Footer>
  </div>
</template>



<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Alert from './components/alert.vue';


import anime from 'animejs'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    /* eslint-disable */
    Alert

  },

  methods: {
    beforeEnter(el) {
      anime.set(el, { translateX: '10%', opacity: 0 });
    },
    enter(el, done) {
      anime({
        targets: el,
        translateX: ['10%', '0%'],
        opacity: [0, 1],
        duration: 500, // Increased the duration for slowmo effect
        easing: 'easeInOutSine',
        elasticity: 500, // Added elasticity for a stretchy effect
        complete: done
      });
    },
    leave(el, done) {
      anime({
        targets: el,
        translateX: ['0%', '10%'],
        opacity: [1, 0],
        duration: 500, // Increased the duration for slowmo effect
        easing: 'easeInOutSine',
        elasticity: 500, // Added elasticity for a stretchy effect
        complete: done
      });
    }
  }
}





</script>
<style scoped>
.slide-fade-enter,
.slide-fade-leave-to {
  position: absolute;
  width: 100%;
}
</style>