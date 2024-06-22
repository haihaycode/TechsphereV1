<template>
    <div class="card m-3">
        <div class="card-body grid grid-cols-1 md:grid-cols-2 gap-4 mx-3">
            <!-- hình bên phải -->
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/image/login.avif" alt="">
            </div>
            <!-- đây là form đăng nhập -->
            <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }" class="">
                <div class="form-row mb-3">
                    <div class="form-group col">
                        <label>Email</label>
                        <Field name="email" type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            :class="{
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700': errors.email,
                ' border border-blue-500 text-green-900  placeholder-green-700': !errors.email
            }" />
                        <div class="text-red-500">{{ errors.email }}</div>
                    </div>
                </div>

                <div class="form-row mb-3">
                    <div class="form-group col">
                        <label>Password</label>
                        <Field name="password" type="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            :class="{
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700': errors.password,
                ' border border-blue-500 text-green-900 dark:text-green-400 placeholder-green-700': !errors.password
            }" />
                        <div class="text-red-500">{{ errors.password }}</div>
                    </div>
                </div>

                <div class="form-group form-check mb-3">
                    <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true" class="form-check-input"
                        :class="{ 'is-invalid': errors.acceptTerms }" />
                    <label for="acceptTerms" class="form-check-label"> &nbsp; Remember Me ?</label>
                    <div class="text-red-500">{{ errors.acceptTerms }}</div>
                </div>

                <div class="form-group text-end">
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                </div>
            </Form>

        </div>
    </div>
</template>

<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

export default {
    name: 'LoginComponent',
    components: {
        Form,
        Field,
    },
    data() {
        // phần này kiểm tra validation
        const schema = Yup.object().shape({
            email: Yup.string().required('Email is required *').email('Email is invalid *'),
            password: Yup.string().min(6, 'Password must be at least 8 characters *').required('Password is required *'),

        });
        return { schema };

    },
    methods: {
        onSubmit(values) {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
            // đợi api
        }
    }
};
</script>