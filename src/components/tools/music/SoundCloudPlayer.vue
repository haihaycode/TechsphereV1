<template>
    <div class="container mx-auto  mt-1">
        <div class="relative mb-3 ">
            <input type="text" v-model="searchTerm" placeholder="Search songs..." @keyup.enter="searchTracks"
                class="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none" />
            <button v-if="searchTerm" @click="clearSearchTerm"
                class="absolute inset-y-0 right-0 px-2 flex items-center focus:outline-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>

            <button v-if="searchTerm" @click="searchTracks"
                class="absolute inset-y-0 right-7 px-2  flex items-center focus:outline-none">
                Search songs
            </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-4">
            <div v-for="track in tracks" :key="track.url" @click="selectTrack(track.url)"
                class=" p-4 bg-white rounded-lg shadow-md cursor-pointer grid grid-cols-2 overflow-hidden">
                <div class="relative w-3/3 ml-2 mr-2">
                    <img src="https://solution.com.vn/upload_images/images/2021/12/logo-am-nhac/logo-am-nhac-2.jpg"
                        class="w-full h-full object-cover rounded-md max-h-full" />

                    <svg class="absolute inset-0 w-full h-12 m-auto text-gray-100 opacity-70" fill="currentColor"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v18l15-9L5 3z" />
                    </svg>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-2 truncate leading-6">{{ track.title }}</h3>
                    <p class="text-gray-600 truncate leading-6">{{ track.user.username }}</p>
                </div>
            </div>
            <SkeletonCard :loading="loading" />
        </div>
        <Button @click="loadMore" :disabled="loading" :text="buttonText" :loading="loading" class="mt-2 hidden" />
        <Player v-if="currentTrack" :currentTrack="currentTrack" @close-player="handleClosePlayer" />
    </div>
</template>

<script>
import axios from 'axios';
import Player from '@/components/tools/music/Player.vue'; // Đường dẫn tới component Player
import SkeletonCard from '@/components/SkeletonCard.vue'
import Button from '@/components/button.vue';
// import Image from '@/components/image.vue';

export default {
    components: {
        Player,
        SkeletonCard,
        Button,
        // Image
    },
    data() {
        return {
            tracks: [], // Mảng lưu các bài hát được tải
            searchTerm: '', // Từ khóa tìm kiếm nhập bởi người dùng
            limit: 100, // Số lượng bài hát được tải mỗi lần
            allTracksLoaded: false, // Cờ chỉ ra liệu tất cả các bài hát đã được tải hay chưa
            apiBaseUrl: 'https://ditmemaykkkk.com/api/soundcloud', // Địa chỉ cơ sở của API
            currentTrack: null,// Bài hát đang được chọn để phát
            loading: false,
            buttonText: 'Load more'
        };
    },
    methods: {
        async fetchTracks() {
            try {
                this.loading = true;
                if (!this.searchTerm) {
                    this.tracks = [];
                    this.loading = false;
                    return;
                }

                const response = await axios.get(`${this.apiBaseUrl}/search`, {
                    params: {
                        query: this.searchTerm,
                        limit: this.limit,
                    }
                });

                this.tracks = [...response.data.result];


                this.allTracksLoaded = this.tracks.length < this.limit;
                console.log(this.tracks)
            } catch (error) {
                console.error('Error fetching tracks:', error);
            } finally {
                this.loading = false;
            }
        },

        async loadMore() {
            try {
                this.loading = true;
                const response = await axios.get(`${this.apiBaseUrl}/search`, {
                    params: {
                        query: this.searchTerm,
                        limit: this.limit,
                        offset: this.tracks.length,
                    }
                });

                let newTracks = [...response.data.result];

                // Lấy thông tin chi tiết từng bài hát để lấy URL hình ảnh
                for (let track of newTracks) {
                    const trackDetails = await this.fetchTrackDetails(track.url);
                    track.image = trackDetails.artwork_url || trackDetails.user.avatar_url; // Gán URL hình ảnh
                }

                this.tracks = [...this.tracks, ...newTracks];
                this.allTracksLoaded = newTracks.length < this.limit;
            } catch (error) {
                console.error('Error fetching tracks:', error);
            } finally {
                this.loading = false;
            }
        },
        playTrack(trackUrl) {
            this.currentTrack = trackUrl;

        },
        searchTracks() {
            this.tracks = [];
            this.fetchTracks();
        },
        selectTrack(trackUrl) {
            this.playTrack(trackUrl);
        },
        clearSearchTerm() {
            this.searchTerm = '';
            this.tracks = [];
            this.fetchTracks();
        },
        handleClosePlayer() {
            this.currentTrack = null;
        }
    },
};
</script>

<style scoped>
/* Điều chỉnh các kiểu theo yêu cầu, sử dụng Tailwind CSS nếu cần thiết */
</style>