<template>
  <div class="card-body grid grid-cols-1 md:grid-cols-3">
    <div class="w-full">
      <sidebar></sidebar>
    </div>
    <div class="col-span-2 ">
      <Form @submit="onSubmit" :validation-schema="emailotp" v-slot="{ errors }"
        class="grid grid-cols-1 md:grid-cols-3 items-end">
        <div class="col-span-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <div class="text-red-500">{{ errors.email }}</div>
          <Field name="email" type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
          errors.email,
        ' border border-blue-500 text-blue-900  placeholder-blue-700':
          !errors.email,
      }" />

        </div>
        <Button type="submit" :disabled="isButtonDisabled" :text="OtpButton" :loading="loading"
          class="w-1/2 h-10 mx-4"></Button>
      </Form>

      <Form @submit="submitchangpassword" :validation-schema="changpassword" v-slot="{ errors }" class="my-3">
        <div class="mb-5 w-40">
          <label>OTP</label>
          <Field name="otp" type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
          errors.otp,
        ' border border-blue-500 text-green-900 dark:text-green-400 placeholder-green-700':
          !errors.otp,
      }" />
          <div class="text-red-500">{{ errors.otp }}</div>
        </div>
        <div class="mb-5">
          <label>Password</label>
          <Field name="password" type="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
          errors.password,
        ' border border-blue-500 text-green-900 dark:text-green-400 placeholder-green-700':
          !errors.password,
      }" />
          <div class="text-red-500">{{ errors.password }}</div>
        </div>
        <div class="mb-5">
          <label>Confirm Password</label>
          <Field name="confirmPassword" type="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
          errors.confirmPassword,
        ' border border-blue-500 text-green-900 dark:text-green-400 placeholder-green-700':
          !errors.confirmPassword,
      }" />
          <div class="text-red-500">{{ errors.confirmPassword }}</div>
        </div>
        <Button type="submit" :disabled="isButtonDisabled" :text="ChangeButton" :loading="loading" />
      </Form>
    </div>
  </div>
</template>

<script>
import Button from "@/components/button.vue";
import Sidebar from "@/components/account/sidebar.vue";
import * as Yup from 'yup';
import { Notyf } from "notyf";
import { senotp, changpassword } from "@/services/authService";
import store from '@/store';
export default {
  name: "ForgetPassword",
  components: {
    Button,
    Sidebar,
  },
  data() {
    const emailotp = Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
    });
    const changpassword = Yup.object().shape({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      otp: Yup.string().required("Otp is required"),
    });
    return {
      emailotp,
      changpassword,
      isButtonDisabled: false,
      loading: false,
      ChangeButton: "Change Password",
      OtpButton: "Send Otp",

    };
  },
  methods: {

    // send mail
    async onSubmit(values) {
      const otp = {
        email: values.email,
      };
      console.log(otp);

      this.disabledButton = true;
      this.loading = true;
      this.SignupButton = "Loading...";
      const notyf = new Notyf();

      try {
        const response = await senotp(values);
        console.log("Success:", response);
        notyf.success("Send otp successfully !");
      } catch (error) {
        console.error("Error:", error);
        notyf.error("Send otp field !");
      } finally {
        this.disabledButton = false;
        this.loading = false;
        this.OtpButton = "Send Otp";
      }
    },

    // update
    async submitchangpassword(values) {
      const data = {
        otp: values.otp,
        password: values.password,
      };
<<<<<<< HEAD
      console.log(data);
=======

>>>>>>> c7e2f1776fb4add6cc7e8c6df5f04b90680ba9c4
      this.disabledButton = true;
      this.loading = true;
      this.SignupButton = "Loading...";
      const notyf = new Notyf();

      try {
        const response = await changpassword(data);
        console.log("Success:", response);
        notyf.success(response.message);


        store.dispatch('logout');
        window.location.href = '/login?logout=true';


      } catch (error) {
        console.error("Error update email :", error);
        notyf.error(error.message);
      } finally {
        this.disabledButton = false;
        this.loading = false;
        this.ChangeButton = "Update Password";

      }
    },


  },
};
</script>