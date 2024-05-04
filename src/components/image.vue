<template>



  <div class="relative min-h-40 ">
    <img v-lazysizes :src="srcImage" alt="Image" @load="handleLoad" @error="handleError" loading="lazy" 
    class="rounded-t-lg w-full max-h-96 transition-opacity duration-500 " :class="{ 'opacity-0': loading, 'blur-sm': loading }">
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
      <content-loader class="rounded-t-lg max-w p-3">
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        <rect x="0" y="80" rx="3" ry="3" width="200" height="10" />
        <rect x="0" y="100" rx="3" ry="3" width="80" height="10" />
      </content-loader>
    </div>
  </div>


</template>

<script>
import vueLazysizes from 'vue-lazysizes';
import { ContentLoader } from 'vue-content-loader';
export default {
  name: "ImageComponent",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ContentLoader
  },
  directives: {
    lazysizes: vueLazysizes
  },
  props: {
    srcImage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: true
    };
  },
  methods: {
    handleLoad() {
      this.loading = false;
    },
    handleError() {
      console.error('Failed to load image');
      this.loading = false;
    }
  }
};
</script>
<style scoped>
/* Định dạng mờ cho hình ảnh */
.blur-sm {
  filter: blur(4px);
  /* Độ mờ mờ nhẹ */
}
</style>