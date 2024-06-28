<template>


    <div
        class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image"
            class="absolute inset-0 w-full h-full object-cover" />
        <div
            class="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <h2 class="sm:text-4xl text-2xl font-bold mb-6">Explore the World</h2>
            <p class="text-lg text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation
                today!</p>
            <a href="javascript:void(0)"
                class="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
                Book Now
            </a>
        </div>
    </div>


    <nav class="bg-white border-gray-200 dark:bg-gray-900  border-t-8">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/image/logo1.png" class="h-8" alt="logo" />
                <RouterLink class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" to="/">
                    Techsphere</RouterLink>
            </a>
            <button @click="toggleMenu" data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Mở menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-white-600 bg-blue-700 rounded md:bg-transparent md:text-black text-white md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Trang chủ</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tin
                            tức </a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Liên
                            hệ</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <RouterLink to="/Register">Tài khoản</RouterLink>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <RouterLink to="/Login">Đăng Nhập</RouterLink>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <RouterLink to="/account/info">Check</RouterLink>
                        </a>
                    </li>






                </ul>
            </div>
        </div>
    </nav>


    <!-- <Nav/> -->










</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
    name: 'HeaderApp',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Nav
    },
    methods: {
        toggleMenu() {
            const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
            const menu = document.getElementById('navbar-default');
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isOpen);
            if (isOpen) {
                menu.classList.remove('block');
                menu.classList.add('hidden');
            } else {
                menu.classList.remove('hidden');
                menu.classList.add('block');
            }
        },
        toggleMenu1() {
            var menu = document.getElementById("mega-menu-full");
            var button = document.querySelector("[data-collapse-toggle='mega-menu-full']");

            if (menu.classList.contains("hidden")) {
                // Hiển thị menu
                menu.classList.remove("hidden");
                button.setAttribute("aria-expanded", "true");
            } else {
                // Ẩn menu
                menu.classList.add("hidden");
                button.setAttribute("aria-expanded", "false");
            }
        }


    }
}
</script>