<!-- YourComponent.vue -->
<template>
    <div class="container mx-auto px-2 mt-8 ">
        <div class="relative mb-3">
            <input type="text" v-model="searchTerm" placeholder="Search songs..."
                class="w-full px-4 py-2  rounded-md shadow-sm focus:outline-none " @input="searchTracks" />
            <button v-if="searchTerm" @click="clearSearchTerm"
                class="absolute inset-y-0 right-0 px-3  flex items-center focus:outline-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="track in tracks" :key="track.id" @click="selectTrack(track)"
                class="p-4 bg-white rounded-lg shadow-md cursor-pointer grid grid-cols-2 ">
                <div class="relative w-2/3  ml-2">
                    <img v-if="track.album.images.length > 0" :src="track.album.images[0].url" alt="Album Cover"
                        class="w-full h-24 object-cover rounded-md">
                    <svg class="absolute inset-0 w-12 h-12 m-auto text-gray-100 opacity-70" fill="currentColor"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v18l15-9L5 3z" />
                    </svg>
                </div>
                <div class="">
                    <h3 class="text-lg font-semibold mb-2">{{ track.name }}</h3>

                    <p class="text-gray-600">{{ track.artists.map(artist => artist.name).join(', ') }}</p>
                </div>
            </div>
            <SkeletonCard :loading="loading" />
        </div>


        <Button v-if="!allTracksLoaded" @click="loadMore" :disabled="isButtonDisabled" :text="buttonText"
            :loading="loading" class="mt-2" />

        <!-- Modal or Player Component -->
        <Player v-if="currentTrack" :currentTrack="currentTrack" @close-player="handleClosePlayer" />
    </div>

</template>

<script>
import axios from 'axios';
import Player from '@/components/music/Player.vue'; // Đường dẫn tới component Player
import SkeletonCard from '@/components/SkeletonCard.vue'
import Button from '@/components/button.vue';

export default {
    components: {
        Player,
        // eslint-disable-next-line vue/no-unused-components
        SkeletonCard,
        // eslint-disable-next-line vue/no-unused-components
        Button
    },
    data() {
        return {
            tracks: [], // Mảng lưu các bài hát được tải
            searchTerm: '', // Từ khóa tìm kiếm nhập bởi người dùng
            offset: 0, // Vị trí bắt đầu của trang tiếp theo
            limit: 10, // Số lượng bài hát được tải mỗi lần
            allTracksLoaded: false, // Cờ chỉ ra liệu tất cả các bài hát đã được tải hay chưa
            accessToken: null, // Token truy cập Spotify
            apiBaseUrl: 'https://api.spotify.com/v1', // Địa chỉ cơ sở của API Spotify
            currentTrack: null,// Bài hát đang được chọn để phát
            loading: false,
            buttonText: 'Load more'
        };
    },
    mounted() {
        // Tải danh sách các bài hát ban đầu
        this.fetchTracks();
    },
    methods: {

        async fetchTracks() {
            try {
                // Lấy token truy cập Spotify
                this.loading = true
                await this.fetchAccessToken();

                if (!this.searchTerm) {
                    return;
                }

                // Lấy danh sách bài hát từ Spotify API
                const response = await axios.get(`${this.apiBaseUrl}/search`, {
                    headers: {
                        Authorization: `Bearer ${this.accessToken}`
                    },
                    params: {
                        q: this.searchTerm,
                        type: 'track',
                        limit: this.limit,
                        offset: this.offset
                    }
                });

                // Cập nhật mảng tracks với danh sách bài hát được tải về
                this.tracks = [...this.tracks, ...response.data.tracks.items];

                // Kiểm tra xem tất cả các bài hát đã được tải chưa
                this.allTracksLoaded = this.tracks.length >= response.data.tracks.total;
            } catch (error) {
                console.error('Error fetching tracks:', error);
            } finally {
                this.loading = false
            }
        },
        async fetchAccessToken() {
            try {
                const clientId = '5a2814e1bf634d1a920a8ec3650c32ef';
                const clientSecret = '9a8c0a7c96cf44fd9078caa27ecc97fd';
                const credentials = `${clientId}:${clientSecret}`;
                const base64Credentials = btoa(credentials); // Mã hóa Base64 cho credentials

                const response = await axios.post('https://accounts.spotify.com/api/token',
                    'grant_type=client_credentials', {
                    headers: {
                        'Authorization': `Basic ${base64Credentials}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                this.accessToken = response.data.access_token;
            } catch (error) {
                console.error('Error fetching access token:', error);
            }
        },
        async loadMore() {
            // Tăng offset để tải thêm trang bài hát tiếp theo
            this.offset += this.limit;

            // Tải thêm bài hát
            await this.fetchTracks();
        },
        playTrack(track) {
            // Thiết lập bài hát hiện tại để phát
            this.currentTrack = track;
        },
        searchTracks() {
            // Thiết lập watch searchTerm và tải bài hát khi searchTerm thay đổi
            this.offset = 0; // Reset offset
            this.tracks = []; // Xóa mảng tracks
            this.fetchTracks(); // Tải lại danh sách bài hát dựa trên searchTerm mới
        },
        selectTrack(track) {
            // Xử lý khi người dùng chọn một bài hát để phát
            this.playTrack(track);
        },
        clearSearchTerm() {
            // Clear the search term and reload tracks
            this.searchTerm = '';
            this.offset = 0;
            this.tracks = [];
            this.fetchTracks();
        },
        handleClosePlayer() {
            this.currentTrack = null; // Đặt currentTrack về null để đóng player
        }
    },

    watch: {
        searchTerm() {
            // Thiết lập watch searchTerm và tải bài hát khi searchTerm thay đổi
            this.offset = 0; // Reset offset
            this.tracks = []; // Xóa mảng tracks
            this.fetchTracks(); // Tải lại danh sách bài hát dựa trên searchTerm mới
        }
    }
};
</script>

<style scoped>
/* Điều chỉnh các kiểu theo yêu cầu, sử dụng Tailwind CSS nếu cần thiết */
</style>