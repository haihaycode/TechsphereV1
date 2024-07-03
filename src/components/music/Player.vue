<template>
    <div v-if="!loading">
        <div v-if="audio" class="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md player-container ">
            <div class="flex justify-between">
                <div>
                    <div class="flex justify-start">
                        <h3 class="text-sm md:text-lg font-semibold mb-2 mx-2" @click="toggleMore">{{ audio ?
        audio.music.title : '' }}</h3>
                        <button @click="toggleMore"
                            class=" px-4  text-black rounded-md flex items-start justify-center">
                            <svg v-if="!showMore" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7">
                                </path>
                            </svg>
                        </button>
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

            <div v-if="audio && audio.music.thumbnail">
                <div v-if="showMore" class="mt-4 text-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-4 player-container">
                    <div class=" col-span-1">

                        <img class="w-full h-full p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 animate-spin-slow    "
                            :src="audio.music.thumbnail" alt="Bordered avatar">

                    </div>
                    <div class="col-span-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error aspernatur illum consequuntur
                        reprehenderit perferendis excepturi quas quod dolor est architecto qui explicabo quo, cupiditate
                        rem sed pariatur quos distinctio soluta.
                    </div>
                </div>


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
            showMore: false, // Trạng thái hiển thị lời bài hát
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
        toggleMore() {
            this.showMore = !this.showMore; // Chuyển đổi trạng thái hiển thị lời bài hát
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
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
    /* Điều chỉnh shadow nếu cần */
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

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin 10s linear infinite;
}
</style>
