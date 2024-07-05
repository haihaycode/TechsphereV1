<template>
    <!-- tool   -->
    <div class="md:px-14 md:py-4 px-3 py-2 mt-2 ">
        <h1
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white text-center">
            Top AI tools you can experience here <span class="text-blue-900 dark:text-blue-900">the world's #1</span>
            Techsphere.
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center">Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Temporibus ut at atque deleniti eos in possimus minima ratione qui
            quidem, magnam blanditiis tempore eligendi dolore eum ex aut vitae sunt.
        </p>

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
                <div id="music-tool" class="bg-gray-100 p-4 mt-3 md:mt-0 rounded">
                    <p class="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">
                        # Tool Music from <span class="text-yellow-400">SoundCloud</span>
                    </p>
                    <p class="text-lg font-serif text-gray-500 lg:text-sm dark:text-gray-400 text-start">
                        Here you can search for any song you love, and enjoy the music
                    </p>
                    <SoundCloudPlayer></SoundCloudPlayer>
                </div>
                <!-- tool music / -->

                <!-- tool AI Generator Picture (giả định) -->
                <div id="ai-generator-picture-tool" class="bg-gray-100 p-4 mt-3 rounded">
                    <!-- Content for AI Generator Picture Tool -->

                    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
                            class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better
                            Data</span> Scalable AI.</h1>
                    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus
                        on markets where technology, innovation, and capital can unlock long-term value and drive
                        economic growth.</p>

                </div>
                <!-- tool AI Generator Picture / -->

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

export default {
    name: 'ToolsPage',
    components: {
        SoundCloudPlayer,
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