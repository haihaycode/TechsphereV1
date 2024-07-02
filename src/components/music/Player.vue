<template>
    <div v-if="currentTrack && currentTrack.preview_url"
        class="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md player-container ">

        <div class="flex justify-between">

            <div>
                <h3 class="text-lg font-semibold mb-2">{{ currentTrack.name }}</h3>
                <p class="text-gray-600">{{ currentTrack.artists.map(artist => artist.name).join(', ') }}</p>
            </div>
            <a @click="closePlayer" class="mt-2 ">
                <svg class=" inset-0 w-5 h-5  text-gray-500 hover:text-red-600 hover:bg-slate-50 " fill="currentColor"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </a>
        </div>

        <audio controls :src="currentTrack.preview_url" class="w-full mt-4"></audio>

    </div>


    <div v-else class="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md">
        <p class="text-red-500">Không thể phát nhạc từ bài hát này.</p>
    </div>
</template>

<script>

export default {
    name: "PlayerComponent",
    props: {
        currentTrack: Object // Prop nhận vào thông tin của bài hát đang được phát
    },
    methods: {
        closePlayer() {
            this.$emit('close-player'); // Phát sự kiện để thông báo cho component cha đóng player
        }
    },

};
</script>

<style scoped>
.player-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
    /* Điều chỉnh shadow nếu cần */
    /* Ban đầu ẩn phần tử dưới cùng */
    transform: translateY(100%);
    animation: bottomToTop 0.3s ease forwards;
    /* Hiệu ứng chuyển động */
}

@keyframes bottomToTop {
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0%);
    }
}
</style>
