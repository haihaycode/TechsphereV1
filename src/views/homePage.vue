<template>

  <!-- <Button :disabled="isButtonDisabled" @click="handleButtonClick" :text="buttonText" :loading="loading" /> -->

  <!-- <SkeletonCard :loading="loading" /> -->


  <!-- 
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 lg:mx-20 my-5 mt-10 max-w-full">

    <div v-for="(post, index) in posts" :key="index" class=" rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
      <a href="#">
        <Image :srcImage="getImageUrl(post.postId)" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 md:text-xl  sm:text-sm text-blue-900  font-bold tracking-tight  dark:text-white">
            {{ truncateDescription(post.title, 100) }}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ truncateDescription(post.description, 80) }}</p>
        <p class=" mb-3 text-end text-gray-500 dark:text-gray-400"> {{ formatDateTimeCountdown(post.updatedAt) }} - {{
    formatDateTime(post.updatedAt) }} </p>
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




  </div> -->


  <div class="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">


    <div class="container mx-auto">
      <h2 class="text-3xl font-extrabold text-gray-800 mb-8">Latest Blog Posts</h2>
      <SkeletonCard :loading="loading" />


      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div v-for="(post, index) in posts" :key="index"
          class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
          <Image :srcImage="getImageUrl(post.postId)" class="w-full h-52 object-cover" />
          <div class="p-6">
            <span class="text-sm block text-gray-400 mb-2"> {{ formatDateTimeCountdown(post.updatedAt) }} | {{
        formatDateTime(post.updatedAt) }}</span>
            <h3 class="text-xl font-bold text-[#333]">{{ truncateDescription(post.title, 100) }} / {{ post.postId }}
            </h3>
            <hr class="my-6" />
            <p class="text-gray-400 text-sm">{{ truncateDescription(post.description, 80) }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>



  <ListCategories />









</template>
<script>
// import Button from '@/components/button.vue';
import SkeletonCard from '@/components/SkeletonCard.vue'
import Image from '@/components/image.vue';
import axios from 'axios';
import { truncateDescription } from '@/helper/StringHelper.js'
import { formatDateTimeCountdown, formatDateTime } from '@/helper/datetimeHelper.js'
import ListCategories from '@/components/ListCategories.vue';
// import { account } from '@/services/authService'
export default {
  name: 'HomePage',
  components: {
    // 
    SkeletonCard,
    // 
    Image,
    //
    ListCategories

  },
  data() {
    return {
      isButtonDisabled: false,
      loading: true,
      buttonText: 'Đăng ký',
      posts: [],
      link: 'https://techsphere-production.up.railway.app'
    };
  },
  mounted() {
    // const user = account();
    // console.log(user);
    this.loadPostList()

  },
  methods: {
    // async handleButtonClick() {
    //   // Khi button được click, set loading và disabled
    //   this.loading = true;
    //   this.isButtonDisabled = false;
    // },
    truncateDescription,
    formatDateTimeCountdown,
    formatDateTime,
    getImageUrl(postId) {
      return `${this.link}/api/posts/image/${postId}`;
    },
    async loadPostList() {
      try {
        //https://techsphere-production.up.railway.app
        //http://localhost:1907
        const response = await axios.get(this.link + '/api/posts/');
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