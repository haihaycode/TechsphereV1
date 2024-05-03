<template>

  <!-- <Button :disabled="isButtonDisabled" @click="handleButtonClick" :text="buttonText" :loading="loading" /> -->

  <SkeletonCard :loading="loading" />



  <div class="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-4 mx-2 lg:mx-20 ">

    <div v-for="(user, index) in userList" :key="index"
      class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
            acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
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
      userList: []
    };
  },
  mounted() {
    this.loadUserList()
  },
  methods: {
    // async handleButtonClick() {
    //   // Khi button được click, set loading và disabled
    //   this.loading = true;
    //   this.isButtonDisabled = false;
    // },
    async loadUserList() {
      try {
        const response = await axios.get('https://techsphere-production.up.railway.app/api/users/');

        this.userList = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>