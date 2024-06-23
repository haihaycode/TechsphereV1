<template>
  <div class="card m-3">
    <div class="card-body grid grid-cols-1 md:grid-cols-2 gap-4 mx-3">
      <div>
        <img class="h-auto max-w-full rounded-lg" src="/image/login.avif" alt="" />
      </div>
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <div class="form-row mb-3">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <Field name="name" type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700': errors.name,
        ' border border-blue-500 text-blue-900  placeholder-blue-700': !errors.name
      }" />
          <div class="text-red-500">{{ errors.name }}</div>
        </div>
        <div class="form-row mb-3">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <Field name="username" type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700': errors.username,
        ' border border-blue-500 text-green-900 dark:text-green-400 placeholder-green-700': !errors.username
      }" />
          <div class="text-red-500">{{ errors.username }}</div>
        </div>

        <div class="form-row mb-3">
          <label>Email</label>
          <Field name="email" type="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700': errors.email,
        ' border border-blue-500 text-green-900 dark:text-green-400 placeholder-green-700': !errors.email
      }" />
          <div class="text-red-500">{{ errors.email }}</div>
        </div>

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
        <div class="form-group col">
          <label>Confirm Password</label>
          <Field name="confirmPassword" type="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700': errors.confirmPassword,
        ' border border-blue-500 text-green-900 dark:text-green-400 placeholder-green-700': !errors.confirmPassword
      }" />
          <div class="text-red-500">{{ errors.confirmPassword }}</div>
        </div>

        <div class="form-group form-check">
          <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true" class="form-check-input"
            :class="{ 'is-invalid': errors.acceptTerms }" />
          <label for="acceptTerms" class="form-check-label">Accept Terms & Conditions</label>
          <div class="text-red-500">{{ errors.acceptTerms }}</div>
        </div>

        <div class="form-group text-end">
          <Button type="submit" :disabled="isButtonDisabled" :text="SignupButton" :loading="loading" />
          <Button type="reset" class="btn btn-secondary" :text="ResetButton"></Button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import Button from "@/components/button.vue";
import { Notyf } from "notyf";
import axios from "axios";

export default {
  name: "RegisterComponent",
  components: {
    Form,
    Field,
    Button,
  },
  data() {
    const schema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      acceptTerms: Yup.boolean().required("Please agree to the terms"),
    });

    return {
      schema,
      isButtonDisabled: false,
      loading: false,
      SignupButton: "register",
      ResetButton: "reset",
    };
  },
  methods: {
    async onSubmit(values) {
      // alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
      //đợi api

      const registerData = {
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
      };
      console.log(registerData);

      this.disabledButton = true;
      this.loading = true;
      this.SignupButton = "Loading...";
      const notyf = new Notyf();

      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/signup",
          registerData
        );
        console.log("Success:", response);
        notyf.success("Signup successfully !");
      } catch (error) {
        console.error("Error:", error);
        notyf.error("Signup field !");
      } finally {
        this.disabledButton = false;
        this.loading = false;
        this.SignupButton = "register";
      }
    },
  },
};
</script>