<template>
    <div v-if="show"  class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative " role="alert">
      <strong class="font-bold">Success!</strong>
      <span class="block sm:inline">{{ message }}</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg @click="closeAlert" class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Close</title>
          <path d="M14.348 14.849a1 1 0 0 1-1.415 1.414l-3.535-3.536-3.536 3.536a1 1 0 0 1-1.414-1.414l3.536-3.536-3.536-3.535a1 1 0 0 1 1.414-1.415l3.536 3.536 3.535-3.536a1 1 0 0 1 1.415 1.414l-3.536 3.536 3.536 3.535z"/>
        </svg>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AlertComponent',
    props: {
      message: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        show: true
      }
    },
    methods: {
      closeAlert() {
        this.show = false;
      }
    }
  }
  </script>
  
  