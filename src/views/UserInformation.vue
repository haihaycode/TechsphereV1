<template>
  <div class="card m-3">
    <div class="card-body grid grid-cols-1 md:grid-cols-3">
      <div class="w-full">
        <sidebar></sidebar>
      </div>

      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }" class="col-span-2">


        <img v-if="account.profilePicture"
          class="w-40 h-40 p-1 mx-auto rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          :src="account.profilePicture" alt="User avatar">
        <img v-else class="w-40 h-40 p-1 mx-auto rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="/image/account/no-avatar.png" alt="Default avatar">

        <div class="flex justify-center  items-center">
          <p class="text-3xl font-bold  text-gray-900 my-2 text-center dark:text-white">{{ account.username + '.' }}</p>
          <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round"
            stroke-linejoin="round">
            <circle cx="12" cy="12" r="11"></circle>
            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"></path>
          </svg>
        </div>


        <div class="form-row mb-3">
          <div class="form-group col">
            <label>Name</label>
            <Field name="name" type="text" v-model="account.name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
          errors.name,
        ' border border-blue-500 text-blue-900  placeholder-blue-700':
          !errors.name,
      }" />
            <div class="text-red-500">{{ errors.name }}</div>
          </div>
        </div>

        <div class="form-row mb-3">
          <div class="form-group col">
            <label>Address</label>
            <Field name="address" as="textarea" rows="3" v-model="account.address"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
          errors.address,
        ' border border-blue-500 text-green-900 dark:text-green-400 placeholder-green-700':
          !errors.address,
      }" />
            <div class="text-red-500">{{ errors.address }}</div>
          </div>
        </div>

        <div class="form-row mb-3">
          <div class="form-group col">
            <label>Phone</label>
            <Field name="phone" type="number" v-model="account.phoneNumber"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
          errors.phone,
        ' border border-blue-500 text-blue-900  placeholder-blue-700':
          !errors.phone,
      }" />
            <div class="text-red-500">{{ errors.phone }}</div>
          </div>
        </div>

        <div class="form-group form-check">
          <label>Gender</label><br />
          <Field as="select" name="gender" id="gender" v-model="account.gender"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-select"
            :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700': errors.gender,
        'border border-blue-500 text-blue-900 placeholder-blue-700': !errors.gender,
      }">
            <option value="male" :selected="account.gender === 'male'">Male</option>
            <option value="female" :selected="account.gender === 'female'">Female</option>
            <option value="other" :selected="account.gender === 'other'">Other</option>
          </Field>
          <div class="text-red-500">{{ errors.gender }}</div>

          <div class="text-red-500">{{ errors.gender }}</div>
        </div>

        <div class="form-group text-end">
          <Button type="submit" :disabled="isButtonDisabled" :text="UpdateButton" :loading="loading" />
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import { Form, Field } from "vee-validate";
import Button from "@/components/button.vue";
import sidebar from "@/components/account/sidebar.vue";
import * as Yup from "yup";
import Cookies from 'js-cookie';
import { accountService, getAvatar } from '@/services/authService';
export default {
  name: "UserInformation",
  components: {
    Form,
    Field,
    Button,
    sidebar,
  },
  data() {
    const schema = Yup.object().shape({
      name: Yup.string().required("name is required *"),
      address: Yup.string().required("address is required *"),
      phone: Yup.string()
        .matches(/^[0-9]/g, 'Phone number is not valid')
        .required('Phone number is required'),
      gender: Yup.string().required("Please agree to the terms"),
    });

    return {
      schema,
      isButtonDisabled: false,
      loading: false,
      UpdateButton: "Update",
      account: {
        name: null,
        gender: null,
        address: null,
        phoneNumber: null,
        username: "Loading...",
        profilePicture: null,


      },
    };
  },
  mounted() {
    this.loadAccount()


  },
  methods: {
    async onSubmit(values) {
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
      this.token = Cookies.get('authToken');
      console.log('đây là token nè đúng không' + this.token)
    },
    async loadAccount() {
      try {
        const response = await accountService(); // Adjust accountService function call as per your implementation
        this.account = response.data; // Assuming accountService returns user account data
        console.log(this.account.name)
      } catch (error) {
        console.error('Failed to load account:', error);
      }
      this.loadImage()

    },
    async loadImage() {
      try {

        const response = await getAvatar(this.account.profilePicture);
        this.account.profilePicture = response;

      } catch (error) {
        console.error('Failed to load account:', error);
      }
    }
  },
};
</script>