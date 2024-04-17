<template>
    <header class="bg-gray-300 text-white p-4">
      <h1 class="text-2xl">This is the Home {{title}} </h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    props :['title']
  }
  </script>
  
