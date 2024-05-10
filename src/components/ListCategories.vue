<template>

<section class="text-gray-600 body-font overflow-hidden  bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]" >
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      
      <div v-for="(category, index) in categories " :key="index" class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">CATEGORY</span>
          <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{{ category.name }}</h2>
          <p class="leading-relaxed">{{ truncateDescription( category.description, 100) }}</p>
          <a class="text-indigo-500 inline-flex items-center mt-4">Xem thêm
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
     
    </div>
  </div>

  
</section>

</template>
<script>
import axios from 'axios';
import { truncateDescription } from '../helper/StringHelper';
 export default {
    name: 'ListCategories',
    data() {
        return{
            categories: [],
            link: 'https://techsphere-production.up.railway.app'
        }
    },
    mounted() {
            this.loadListCategories();

    },methods: {
     truncateDescription,
     async loadListCategories(){
        try {
        //https://techsphere-production.up.railway.app
        //http://localhost:1907
        const response = await axios.get(this.link + '/api/category/');
        this.categories= response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
     }
  }
 }

</script>