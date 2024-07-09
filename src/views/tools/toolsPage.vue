<template>
    <!-- tool   -->
    <div class="md:px-14 md:py-4 px-3 py-2 mt-2 ">


        <div class="flex flex-col md:flex-row mt-3">
            <div class="right w-full md:w-1/4 px-0 md:px-4 md:mt-0">
                <ul
                    class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li :class="{ 'bg-blue-900 text-white': selectedId === 'tools' }" @click="scrollTo('tools')"
                        class="w-full px-4 py-2 border-b border-gray-200 rounded-t dark:border-gray-600 cursor-pointer">
                        Tools</li>
                    <li :class="{ 'bg-blue-900 text-white': selectedId === 'music-tool' }"
                        @click="scrollTo('music-tool')"
                        class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 cursor-pointer">Music Tool
                    </li>
                    <li :class="{ 'bg-blue-900 text-white': selectedId === 'ai-generator-picture-tool' }"
                        @click="scrollTo('ai-generator-picture-tool')"
                        class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 cursor-pointer">AI
                        Generator Picture Tool</li>
                    <li :class="{ 'bg-blue-900 text-white': selectedId === 'download-tool' }"
                        @click="scrollTo('download-tool')" class="w-full px-4 py-2 rounded-b cursor-pointer">Download
                    </li>
                </ul>
            </div>

            <div class="left w-full md:w-4/4">
                <!-- tool music -->
                <div id="music-tool" class="shadow p-4 mt-3 md:mt-0 rounded">
                    <p class="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">
                        # Tool Music from <span class="text-orange-800">SoundCloud</span>
                    </p>

                    <SoundCloudPlayer></SoundCloudPlayer>
                </div>
                <!-- tool music / -->


                <div id="ai-generator-picture-tool" class="shadow p-4 mt-3 rounded">
                    <p class="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">
                        # Tool <span class="text-purple-900">Titkok</span>
                    </p>
                    <tiktokDownload></tiktokDownload>
                </div>


                <!-- tool download (giả định) -->
                <div id="download-tool" class="bg-gray-100 p-4 mt-3 rounded">
                    <!-- Content for Download Tool -->

                    <h1
                        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        We invest in the <span
                            class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">world’s
                            potential</span></h1>
                    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus
                        on markets where technology, innovation, and capital can unlock long-term value and drive
                        economic growth.</p>

                </div>
                <!-- tool download / -->
            </div>
        </div>
    </div>
</template>

<script>
import SoundCloudPlayer from '@/components/tools/music/SoundCloudPlayer.vue'; // Đường dẫn tới component Player
import tiktokDownload from '@/components/tools/tiktok/tiktokDownload.vue';

export default {
    name: 'ToolsPage',
    components: {
        SoundCloudPlayer,
        tiktokDownload
    },
    data() {
        return {
            selectedId: null, // Theo dõi mục được chọn
        };
    },
    methods: {
        scrollTo(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                this.selectedId = id; // Cập nhật mục được chọn
            }
        },
    },
    mounted() {
        // Xác định mục đầu tiên được chọn khi tải trang (nếu cần)
        this.selectedId = 'tools';
    },
}
</script>