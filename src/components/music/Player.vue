<template>
    <div v-if="!loading">
        <div v-if="audio" class="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md player-container">
            <div class="flex justify-between">
                <div>
                    <div class="flex justify-start">
                        <h3 class="text-lg font-semibold mb-2 mx-2">{{ audio ? audio.music.title : '' }}</h3>
                    </div>
                    <p class="text-gray-600 mx-2">{{ audio ? audio.users.username : '' }}</p>
                </div>
                <a @click="closePlayer" class="mt-2">
                    <svg class="w-5 h-5 text-gray-500 hover:text-red-600 hover:bg-slate-50" fill="currentColor"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </a>
            </div>
            <audio controls v-if="audio && audio.music" class="w-full mt-4" :src="audio.music.download_url"></audio>
        </div>



        <div v-else class="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md">
            <p class="text-red-500">Không thể phát nhạc từ bài hát này.</p>
        </div>
    </div>



    <div v-else class="fixed bottom-0 left-0 right-0 p-4  bg-white shadow-md player-container ">
        <SkeletonCard :loading="loading" />
    </div>


</template>

<script>
import axios from 'axios';
import SkeletonCard from '@/components/SkeletonCard.vue'
export default {
    name: 'PlayerComponents',
    components: {
        SkeletonCard
    },
    props: {
        currentTrack: String // Nhận vào URL của bài hát
    },

    data() {
        return {
            audio: null, // Source audio để phát bài hát

            loading: true
        };
    },

    methods: {
        async fetchTrackDetails(trackUrl) {
            this.loading = true;
            try {
                const response = await axios.get(`https://ditmemaykkkk.com/api/soundcloud/track`, {
                    params: {
                        url: trackUrl
                    }
                });
                return response.data;
            } catch (error) {
                console.error('Error fetching track details:', error);
            } finally {
                this.loading = false
            }
        },

        async playTrack(trackUrl) {
            const trackDetails = await this.fetchTrackDetails(trackUrl);
            if (trackDetails) {
                // Xử lý phát nhạc từ trackDetails
                console.log('Thông tin chi tiết của bài hát:', trackDetails);
                this.audio = trackDetails;
            } else {
                console.error('Không thể lấy thông tin chi tiết của bài hát.');
            }
        },

        closePlayer() {
            this.audio = null; // Đặt lại audio về null khi đóng player
            this.$emit('close-player'); // Phát sự kiện để đóng player
        }
    },

    watch: {
        currentTrack() {
            this.audio = null;
            this.playTrack(this.currentTrack);
        }
    }
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
