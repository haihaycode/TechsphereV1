<template>
    <div v-if="audio && audio.music" class="bg-gray-100 rounded-xl shadow-xl p-4 sm:p-6 lg:p-4 xl:p-6 w-full">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <div class="flex items-center space-x-4 col-span-2 md:col-span-1">
                <img :src="audio.music.thumbnail" loading="lazy" decoding="async" alt="Podcast thumbnail"
                    class="rounded-full bg-gray-200 animate-spin-slow  " width="88" height="88">
                <div class=" overflow-hidden">
                    <p class="text-blue-500 text-sm font-semibold">
                        {{ audio.music.likes_count }} likes
                    </p>
                    <h2 class="text-gray-500 text-sm truncate leading-6">
                        {{ audio.music.title }}
                    </h2>
                    <p class="text-gray-900 text-lg">
                        {{ audio.users.username }}
                    </p>
                </div>
            </div>
            <div class="flex items-center space-x-4 col-span-1 md:col-span-2 justify-between md:justify-end">
                <button @click="skipBackward" class="text-gray-700 hover:text-gray-900 focus:outline-none"
                    aria-label="Skip backward">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                        </path>
                    </svg>
                </button>
                <button @click="togglePlay" class="text-gray-700 hover:text-gray-900 focus:outline-none"
                    aria-label="Play/Pause">


                    <div
                        class="cursor-pointer amplitude-play-pause w-24 h-24 rounded-full bg-white border border-play-pause-light-border shadow-xl flex items-center justify-center dark:bg-play-pause-dark-background dark:border-play-pause-dark-border amplitude-paused">
                        <svg v-if="!isPlaying" id="play-icon" class="ml-[10px]" width="31" height="37"
                            viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M29.6901 16.6608L4.00209 0.747111C2.12875 -0.476923 0.599998 0.421814 0.599998 2.75545V33.643C0.599998 35.9728 2.12747 36.8805 4.00209 35.6514L29.6901 19.7402C29.6901 19.7402 30.6043 19.0973 30.6043 18.2012C30.6043 17.3024 29.6901 16.6608 29.6901 16.6608Z"
                                class="fill-slate-500 dark:fill-slate-400"></path>
                        </svg>

                        <svg v-else id="pause-icon" width="24" height="36" viewBox="0 0 24 36" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="6" height="36" rx="3" class="fill-slate-500 dark:fill-slate-400"></rect>
                            <rect x="18" width="6" height="36" rx="3" class="fill-slate-500 dark:fill-slate-400"></rect>
                        </svg>
                    </div>


                </button>
                <button @click="skipForward" class="text-gray-700 hover:text-gray-900 focus:outline-none"
                    aria-label="Skip forward">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
                <button @click="downloadAudio" class="text-gray-700 hover:text-gray-900 focus:outline-none"
                    aria-label="Download">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                            clip-rule="evenodd" />
                    </svg>

                </button>
            </div>
        </div>
        <div class="bg-gray-200 rounded-full h-2">
            <div class="bg-blue-500 rounded-full h-2" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="flex justify-between text-sm font-medium mt-2">
            <div class="text-blue-500">{{ formatTime(currentTime) }}</div>
            <div class="text-gray-500">{{ formatTime(duration) }}</div>
        </div>
        <audio ref="audio" :src="audio.music.download_url"></audio>
    </div>
</template>

<script>
export default {
    name: 'CustomAudioPlayer',
    props: {
        audio: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isPlaying: false,
            progress: 0,
            currentTime: 0,
            duration: 0
        };
    },
    mounted() {
        const audioElement = this.$refs.audio;
        audioElement.addEventListener('timeupdate', this.updateProgress);
        audioElement.addEventListener('loadedmetadata', this.setDuration);
    },
    beforeUnmount() {
        const audioElement = this.$refs.audio;
        audioElement.removeEventListener('timeupdate', this.updateProgress);
        audioElement.removeEventListener('loadedmetadata', this.setDuration);
    },
    methods: {
        togglePlay() {
            const audioElement = this.$refs.audio;
            if (this.isPlaying) {
                audioElement.pause();
            } else {
                audioElement.play();
            }
            this.isPlaying = !this.isPlaying;
        },
        updateProgress() {
            const audioElement = this.$refs.audio;
            const progress = (audioElement.currentTime / audioElement.duration) * 100;
            this.progress = progress;
            this.currentTime = audioElement.currentTime;
        },
        setDuration() {
            const audioElement = this.$refs.audio;
            this.duration = audioElement.duration;
        },
        formatTime(time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        },
        skipForward() {
            const audioElement = this.$refs.audio;
            audioElement.currentTime += 10; // Skip forward 10 seconds
        },
        skipBackward() {
            const audioElement = this.$refs.audio;
            audioElement.currentTime -= 10; // Skip backward 10 seconds
        },
        downloadAudio() {
            const audioElement = this.$refs.audio;
            const url = audioElement.src;
            const link = document.createElement('a');
            link.href = url;
            link.download = this.audio.music.title;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
};
</script>

<style scoped>
/* Add any additional scoped styles here */

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