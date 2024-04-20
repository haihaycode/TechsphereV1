<template class="registration">

    <div class="grid grid-cols-3 gap-2 mt-3 m-3">

        <div class="col-span-3 md:col-span-2">
            <p class="text-4xl font-thin text-center text-gray-900 dark:text-white mb-2">Đăng ký tài khoản </p>
            <form class="max-w-md mx-auto" @submit.prevent="validateForm">
                <div class="relative z-0 w-full mb-5 group">
                    <input v-model.trim="formData.email" type="email" name="floating_email" id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Địa
                        chỉ email của bạn</label>
                    <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input v-model.trim="formData.password" type="password" name="floating_password"
                        id="floating_password"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="floating_password"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mật
                        khẩu</label>
                    <span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</span>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input v-model.trim="formData.repeatPassword" type="password" name="repeat_password"
                        id="floating_repeat_password"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="floating_repeat_password"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Xác
                        nhận mật khẩu</label>
                    <span v-if="errors.repeatPassword" class="text-red-500 text-sm">{{ errors.repeatPassword }}</span>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input v-model.trim="formData.firstName" type="text" name="floating_first_name"
                            id="floating_first_name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label for="floating_first_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Họ</label>
                        <span v-if="errors.firstName" class="text-red-500 text-sm">{{ errors.firstName }}</span>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input v-model.trim="formData.lastName" type="text" name="floating_last_name"
                            id="floating_last_name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label for="floating_last_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tên</label>
                        <span v-if="errors.lastName" class="text-red-500 text-sm">{{ errors.lastName }}</span>
                    </div>
                </div>

                <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đăng ký</button>
            </form>

        </div>
        <div>


        </div>

    </div>
</template>

<script>
export default {
    name: 'registrationComponent',
    data() {
        return {
            formData: {
                email: '',
                password: '',
                repeatPassword: '',
                firstName: '',
                lastName: ''
            },
            errors: {}
        };
    },
    methods: {
        validateForm() {
            this.errors = {};

            if (!this.formData.email.includes('@')) {
                this.errors.email = 'Không đúng định dạng email *';
            }

            if (!this.formData.password) {
                this.errors.password = 'Mật khẩu là trường bắt buộc *';
            } else if (this.formData.password.length < 6) {
                this.errors.password = 'Mật khẩu phải trên 6 kí tự *';
            }

            if (!this.formData.repeatPassword) {
                this.errors.repeatPassword = 'Xác nhận mật khẩu là trường bắt buộc *';
            } else if (this.formData.password !== this.formData.repeatPassword) {
                this.errors.repeatPassword = 'Mật khẩu xác nhận không khớp *';
            }

            if (!this.formData.firstName) {
                this.errors.firstName = 'Họ là trường bắt buộc *';
            }

            if (!this.formData.lastName) {
                this.errors.lastName = 'Tên là trường bắt buộc *';
            }

            if (Object.keys(this.errors).length === 0) {
                console.log('Form is valid', this.formData);
            } else {
                console.log('Form is invalid', this.errors);
            }
        }
    }

}
</script>
