<template>
    <div class="card m-3">
        <div class="card-body">
            <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }" class="max-w-sm mx-auto">
                <div class="form-row">
                    <div class="form-group col">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <Field name="title" as="select" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :class="{ 'is-invalid': errors.title }">
                            <option value=""></option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Ms">Ms</option>
                        </Field>
                        <div class="text-red-500">{{ errors.title }}</div>
                    </div>
                    <div class="form-group col-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <Field name="firstName" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            :class="{ 'is-invalid': errors.firstName }" />
                        <div class="text-red-500">{{ errors.firstName }}</div>
                    </div>
                    <div class="form-group col-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <Field name="lastName" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            :class="{ 'is-invalid': errors.lastName }" />
                        <div class="text-red-500">{{ errors.lastName }}</div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label>Date of Birth</label>
                        <Field name="dob" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :class="{ 'is-invalid': errors.dob }" />
                        <div class="text-red-500">{{ errors.dob }}</div>
                    </div>
                    <div class="form-group col">
                        <label>Email</label>
                        <Field name="email" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :class="{ 'is-invalid': errors.email }" />
                        <div class="text-red-500">{{ errors.email }}</div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label>Password</label>
                        <Field name="password" type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            :class="{ 'is-invalid': errors.password }" />
                        <div class="text-red-500">{{ errors.password }}</div>
                    </div>
                    <div class="form-group col">
                        <label>Confirm Password</label>
                        <Field name="confirmPassword" type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            :class="{ 'is-invalid': errors.confirmPassword }" />
                        <div class="text-red-500">{{ errors.confirmPassword }}</div>
                    </div>
                </div>
                <div class="form-group form-check">
                    <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true" class="form-check-input"
                        :class="{ 'is-invalid': errors.acceptTerms }" />
                    <label for="acceptTerms" class="form-check-label">Accept Terms & Conditions</label>
                    <div class="text-red-500">{{ errors.acceptTerms }}</div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary mr-1">Register</button>
                    <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
            </Form>
        </div>
    </div>
</template>

<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

export default {
    name: 'RegisterComponent',
    components: {
        Form,
        Field,
    },
    data() {
        const schema = Yup.object().shape({
            title: Yup.string().required('Title is required'),
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last name is required'),
            dob: Yup.string().required('Date of Birth is required').matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
            email: Yup.string().required('Email is required').email('Email is invalid'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
            acceptTerms: Yup.string().required('Accept Ts & Cs is required')
        });

        return { schema };
    },
    methods: {
        onSubmit(values) {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
        }
    }
};
</script>