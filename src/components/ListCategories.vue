<template>
  <!-- <section
    class="text-gray-600 body-font overflow-hidden bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]"
  >
    <div class="container px-5 py-24 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="py-8 flex flex-wrap md:flex-nowrap"
        >
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="font-semibold title-font text-gray-700">1111</span>
            <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
          </div>
          <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              {{ category.categoryName}}
            </h2>
            <p class="leading-relaxed">
              {{ truncateDescription(category.description, 100) }}
            </p>
            <a class="text-indigo-500 inline-flex items-center mt-4">
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <nav class="bg-white border-gray-200 dark:bg-gray-900 border-t-8">
    <div  class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li v-for="(category, categoryId) in categories" :key="categoryId">
        <RouterLink
          to="/"
          class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
        {{ category.categoryName }}</RouterLink
        >
      </li>
    </ul>
    </div>
  </nav>
</template>
<script>
import { truncateDescription } from "../helper/StringHelper";
import { getAllCategory } from "@/services/authService";
export default {
  name: "ListCategories",
  data() {
    return {
      categories: [],
      link: "https://techsphere-production.up.railway.app",
    };
  },
  mounted() {
    this.listcategory();
    
  },
  methods: {
    truncateDescription,
    async listcategory() {
      try {
        const response = await getAllCategory();
        this.categories = response.data;
        console.log(this.categories);
      } catch (error) {
        console.error("Failed to load account:", error);
      }
    },
  },
};
</script>