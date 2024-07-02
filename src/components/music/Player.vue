<!-- Player.vue -->
<template>
    <div class="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md" v-if="currentTrack && currentTrack.preview_url">
        <h3 class="text-lg font-semibold mb-2">{{ currentTrack.name }}</h3>
        <p class="text-gray-600">{{ currentTrack.artists.map(artist => artist.name).join(', ') }}</p>
        <audio controls :src="currentTrack.preview_url" class="w-full mt-4"></audio>
    </div>
    <div v-else class="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md">
        <p class="text-red-500">Không thể phát nhạc từ bài hát này.</p>
    </div>
</template>

<script>
export default {
    name: "PlayerComponents",
    props: {
        currentTrack: Object // Prop nhận vào thông tin của bài hát đang được phát
    }
};
</script>

<style scoped>
/* Điều chỉnh kiểu dáng của player nếu cần thiết */
</style>