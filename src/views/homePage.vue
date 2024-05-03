<template>

  <!-- <Button :disabled="isButtonDisabled" @click="handleButtonClick" :text="buttonText" :loading="loading" /> -->

  <SkeletonCard :loading="loading" />



  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mx-2 lg:mx-20 my-5 ">

    <div v-for="(post, index) in posts" :key="index"
      class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg max-w" src="/image/1fcb7f3adb284b1a8c8a7b88626141f3.png~tplv-0es2k971ck-image.png" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ post.title }}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{  truncateDescription(post.description)  }}</p>
        <a href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Xem thêm
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  </div>








</template>
<script>
// import Button from '@/components/button.vue';
import SkeletonCard from '@/components/SkeletonCard.vue'
import axios from 'axios';
import lodash from 'lodash';


export default {
  name: 'HomePage',
  components: {
    // Button
    SkeletonCard

  },
  data() {
    return {
      isButtonDisabled: false,
      loading: true,
      buttonText: 'Đăng ký',
      posts: []
    };
  },
  mounted() {
    this.loadPostList()
  },
  methods: {
    // async handleButtonClick() {
    //   // Khi button được click, set loading và disabled
    //   this.loading = true;
    //   this.isButtonDisabled = false;
    // },
    truncateDescription(text) {
      return lodash.truncate(text, { length: 100 });
    },
    async loadPostList() {
      try {
        //https://techsphere-production.up.railway.app
        //http://localhost:1907
        const response = await axios.get('https://techsphere-production.up.railway.app/api/posts/');

        this.posts = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>