<template>
  <div class="card m-3">
    <div class="card-body grid grid-cols-1 md:grid-cols-3">
      <div class="w-full">
        <sidebar></sidebar>
      </div>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ errors }"
        class="col-span-2"
      >
        <div class="form-row mb-3">
          <div class="form-group col">
            <label>Name</label>
            <Field
              name="name"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :class="{
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
                  errors.name,
                ' border border-blue-500 text-blue-900  placeholder-blue-700':
                  !errors.name,
              }"
            />
            <div class="text-red-500">{{ errors.name }}</div>
          </div>
        </div>

        <div class="form-row mb-3">
          <div class="form-group col">
            <label>Address</label>
            <Field
              name="address"
              as="textarea"
              rows="3"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :class="{
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
                  errors.address,
                ' border border-blue-500 text-green-900 dark:text-green-400 placeholder-green-700':
                  !errors.address,
              }"
            />
            <div class="text-red-500">{{ errors.address }}</div>
          </div>
        </div>

        <div class="form-row mb-3">
          <div class="form-group col">
            <label>Phone</label>
            <Field
              name="phone"
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :class="{
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
                  errors.phone,
                ' border border-blue-500 text-blue-900  placeholder-blue-700':
                  !errors.phone,
              }"
            />
            <div class="text-red-500">{{ errors.phone }}</div>
          </div>
        </div>

        <div class="form-group form-check">
            <label>Gender</label><br />
            <Field  as="select" name="gender" id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-select">
              <option value="male" selected>Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              class=""
              :class="{
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
                  errors.gender,
                ' border border-blue-500 text-blue-900  placeholder-blue-700':
                  !errors.gender,
              }"
            </Field>
            <div class="text-red-500">{{ errors.gender}}</div>
          </div>

        <div class="form-group text-end">
          <Button
            type="submit"
            :disabled="isButtonDisabled"
            :text="UpdateButton"
            :loading="loading"
          />
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
    .matches(/^[0-9]{9}$/g, 'Phone number is not valid')
    .required('Phone number is required'),
    gender: Yup.string().required("Please agree to the terms"),
    });

    return {
      schema,
      isButtonDisabled: false,
      loading: false,
      UpdateButton: "Update",
    };
  },
  methods: {
    async onSubmit(values) {
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
      this.token = Cookies.get('authToken');
      console.log('đây là token nè đúng không'+this.token)
    },
  },
};
</script>