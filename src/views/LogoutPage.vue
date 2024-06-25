<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="text-center">
            <svg class="w-16 h-16 text-blue-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            <h1 class="mt-4 text-2xl font-bold text-gray-700">Logging Out...</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "LogoutPage",

};
</script>

<style scoped>
/* Optionally add any scoped styles here */
</style>